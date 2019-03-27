import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashTerminalModule } from './cashterminal/cashterminal.module';
import { CommonModule } from './common';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot(),
    UserModule,
    RoleModule,
    CashTerminalModule,
  ],
})
export class ApplicationModule { }
