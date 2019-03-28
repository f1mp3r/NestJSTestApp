import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { CashTerminalInput } from '../dto/cashterminal.input';
import { CashTerminalOutput } from '../dto/cashterminal.output';
import { CashTerminalService } from '../services/cashterminal.service';

@Controller('terminal')
@ApiUseTags('CashTerminal')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class TerminalController {
    constructor(
        private readonly cashterminalService: CashTerminalService,
    ) {}

    @Get('getBalance')
    @ApiCreatedResponse({ description: 'Get current available balance' })
    public async getCashTerminalBalance() {
        const balance = await this.cashterminalService.getBalance();

        return plainToClass(CashTerminalOutput, { balance: balance.balance }, { strategy: 'excludeAll' });
    }

    @Put('balance')
    @ApiCreatedResponse({ description: 'Deposit or withdraw money and receive the new balance' })
    public async updateBalance(@Body() cashterminalInput: CashTerminalInput, @Req() request) {
        const newBalance = await this.cashterminalService.updateBalance(request.user.id, cashterminalInput);

        return plainToClass(CashTerminalOutput, { balance: newBalance.balance }, { strategy: 'excludeAll' });
    }
}
