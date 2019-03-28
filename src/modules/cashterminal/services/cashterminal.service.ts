import { Guard, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashTerminalLog } from 'src/db/models/cashterminal_log.entity';
import { CashTerminal } from '../../../db/models/cashterminal.entity';
import { CashTerminalRepository } from '../../../modules/common/repositories/cashterminal.repository';
import { CashTerminalLogRepository } from '../../../modules/common/repositories/cashterminal_log.repository';
import { GuardService } from '../../../modules/common/services/guard.service';
import { CashTerminalInput } from '../dto/cashterminal.input';
import { CashTerminalLogInput } from '../dto/cashterminal_log.input';
import { CashTerminalServiceErr } from '../errors/cashterminal.service.err';

@Injectable()
export class CashTerminalService {
    private readonly BALANCE_ENTRY_ID = 1;
    private readonly BALANCE_PRECISION = 4;

    constructor(
        @InjectRepository(CashTerminalRepository)
        private readonly cashterminalRepository: CashTerminalRepository,

        @InjectRepository(CashTerminalLogRepository)
        private readonly logRepository: CashTerminalLogRepository,

        private readonly guard: GuardService,

        private readonly errors: CashTerminalServiceErr,
    ) { }

    /**
     * Public
     */
    public async getBalance(): Promise<CashTerminal> {
        const balanceEntry = await this
            .cashterminalRepository
            .getOneOrFail({
                where: { id: this.BALANCE_ENTRY_ID }
            })
            .catch(() => this.errors.NF_CASHTERMINAL_BALANCE_ENTRY());

        return balanceEntry;
    }

    /**
     * Updates balance and logs the action
     *
     * @param userId
     * @param cashValue
     */
    public async updateBalance(userId: number, cashValue: CashTerminalInput): Promise<CashTerminal> {
        const balance = await this.getBalance();

        let newBalance = Number(balance.balance);

        if (cashValue.isDeposit()) {
            newBalance += Number(cashValue.value);
        } else {
            if (balance.balance < cashValue.value) {
                this.errors.CNT_WITHDRAW_INSUFFICIENT_FUNDS(balance.balance);
            }

            newBalance -= cashValue.value;
        }

        await this.logMovement(userId, cashValue, balance.balance, newBalance);

        balance.balance = Number(newBalance.toPrecision(this.BALANCE_PRECISION));
        return this.cashterminalRepository.save(balance);
    }

    /**
     * Get all cashterminal logs
     */
    public async getAllLogs(): Promise<CashTerminalLog[]> {
        return this.logRepository.getAll();
    }

    /** Private */

    /**
     * Log transaction
     *
     * @param userId
     * @param cashValue
     * @param oldBalance
     * @param newBalance
     */
    private async logMovement(userId: number, cashValue: CashTerminalInput, oldBalance: number, newBalance: number): Promise<void> {
        const newLog = new CashTerminalLogInput();
        newLog.amount = cashValue.value * (cashValue.isDeposit() ? 1 : -1);
        newLog.oldBalance = oldBalance;
        newLog.newBalance = newBalance;
        newLog.userId = userId;
        newLog.createdAt = new Date();

        await this.logRepository.save(newLog);
    }
}