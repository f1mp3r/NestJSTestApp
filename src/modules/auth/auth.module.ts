import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../db/models/user.entity';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './service/auth.service';

const imports = [
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secretOrPrivateKey: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: 3600,
    },
  }),
];

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
    ]),
    ...imports,
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy,
  ],
  exports: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule { }
