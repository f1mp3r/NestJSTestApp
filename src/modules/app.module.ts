import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot(),
    UserModule,
    RoleModule,
  ],
})
export class ApplicationModule { }
