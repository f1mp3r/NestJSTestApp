import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { CashTerminalLogOutput } from '../dto/cashterminal_log.output';
import { CashTerminalService } from '../services/cashterminal.service';

@Controller('logs')
@ApiUseTags('CashTerminal')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class LogsController {
    constructor(
        private readonly cashterminalService: CashTerminalService
    ) {}

    @Get('/')
    @ApiCreatedResponse({ description: 'Get all transaction logs', type: [CashTerminalLogOutput]})
    public async getLogs() {
        const logs = await this.cashterminalService.getAllLogs();

        return plainToClass(CashTerminalLogOutput, logs, { strategy: 'excludeAll' });
    }
}