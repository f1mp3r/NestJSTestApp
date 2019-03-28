import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LogInterceptor } from './flow';
import { configProvider, LoggerService } from './provider';
import { HelperFunctions } from './provider/helper-functions';
import { GuardService } from './services/guard.service';

import * as i18n from 'i18n';
import * as moment from 'moment';
import { getManager } from 'typeorm';
import { CashTerminalRepository } from './repositories/cashterminal.repository';
import { CashTerminalLogRepository } from './repositories/cashterminal_log.repository';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from './repositories/user.repository';

const providers = [
  configProvider,
  LoggerService,
  LogInterceptor,
  GuardService,
  HelperFunctions,
  {
    provide: 'i18n',
    useValue: i18n,
  },
  {
    provide: 'getManager',
    useValue: getManager,
  },
];

const typeOrmModule = TypeOrmModule.forFeature([
  UserRepository,
  RoleRepository,
  CashTerminalRepository,
  CashTerminalLogRepository,
]);

@Module({
  imports: [
    typeOrmModule,
  ],
  providers: [
    {
      provide: 'moment',
      useValue: moment,
    },
    ...providers,
  ],
  exports: [
    ...providers,
    typeOrmModule,
  ]
})
export class CommonModule { }
