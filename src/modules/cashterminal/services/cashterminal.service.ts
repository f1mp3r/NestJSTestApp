import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashTerminalRepository } from '../../../modules/common/repositories/cashterminal.repository';
import { CashTerminalLogRepository } from '../../../modules/common/repositories/cashterminal_log.repository';
import { CashTerminalServiceErr } from '../errors/cashterminal.service.err';

@Injectable()
export class CashTerminalService {
    private readonly BALANCE_ENTRY_ID = 1;

    constructor(
        @InjectRepository(CashTerminalRepository)
        private readonly cashterminalRepository: CashTerminalRepository,

        @InjectRepository(CashTerminalLogRepository)
        private readonly logRepository: CashTerminalLogRepository,

        private readonly errors: CashTerminalServiceErr,
    ) { }

    /**
     * Public
     */
    public async getBalance(): Promise<number> {
        const balanceEntry = await this
            .cashterminalRepository
            .getOneOrFail({
                where: { id: this.BALANCE_ENTRY_ID }
            })
            .catch(() => this.errors.NF_CASHTERMINAL_BALANCE_ENTRY());
            //Todo: add seeder

        return balanceEntry.balance;
    }
}