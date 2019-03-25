import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common';
import { RoleController } from './controller/role.controller';
import { RoleServiceErr } from './errors/role.service.err';
import { RoleService } from './service/role.service';

@Module({
  imports: [
    CommonModule,
    AuthModule,
  ],
  controllers: [ RoleController ],
  providers: [
    RoleService,
    RoleServiceErr,
  ],
  exports: [
    RoleService,
  ],
})
export class RoleModule {}
