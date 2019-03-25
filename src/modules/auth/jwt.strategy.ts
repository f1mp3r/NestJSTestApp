import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from './interfaces/ jwt-payload.interface';
import { AuthService } from './service/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  public validate(payload: IJwtPayload) {
    const user = this.authService.validateUser(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
