import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common';
import { UserController } from './controller/user.controller';
import { UserServiceErr } from './errors/user.service.err';
import { UserService } from './service/user.service';

@Module({
  imports: [
    CommonModule,
    AuthModule,
  ],
  controllers: [
    UserController,
  ],
  providers: [
    UserService,
    UserServiceErr,
  ],
  exports: [
    UserService,
  ],
})
export class UserModule {}
