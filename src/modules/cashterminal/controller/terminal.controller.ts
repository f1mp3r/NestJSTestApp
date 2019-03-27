import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { CashTerminalOutput } from '../dto/cashterminal.output';
import { CashTerminalService } from '../services/cashterminal.service';

@Controller('terminal')
// @ApiUseTags('')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class TerminalController {
    constructor(
        private readonly cashterminalService: CashTerminalService,
    ) {}

    @Get('balance')
    public async getCashTerminalBalance() {
        const balance = await this.cashterminalService.getBalance();

        return plainToClass(CashTerminalOutput, balance, { strategy: 'excludeAll' });
    }
}
