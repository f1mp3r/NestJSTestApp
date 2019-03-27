import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common';
import { LogsController } from './controller/logs.controller';
import { TerminalController } from './controller/terminal.controller';
import { CashTerminalServiceErr } from './errors/cashterminal.service.err';
import { CashTerminalService } from './services/cashterminal.service';

@Module({
    imports: [
        CommonModule,
        AuthModule,
    ],
    controllers: [
        TerminalController,
        // LogsController,
    ],
    providers: [
        CashTerminalService,
        CashTerminalServiceErr,
    ],
    exports: [
        CashTerminalService,
    ],
})
export class CashTerminalModule {}