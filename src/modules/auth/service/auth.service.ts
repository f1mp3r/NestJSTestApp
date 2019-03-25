import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as i18n from 'i18n';
import { Repository } from 'typeorm';
import { User } from '../../../db/models/user.entity';
import { LoginDTO } from '../dto/login.dto';
import { IJwtPayload } from '../interfaces/ jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  public async login(data: LoginDTO): Promise<string> {
    const theUser = await this.userRepository
      .findOne({
        pinCode: data.pinCode,
      }, {
          select: ['id', 'firstName', 'lastName'],
          relations: ['role'],
        });

    if (!theUser) {
      throw new BadRequestException(i18n.__('LOGIN.WRONG_PIN'));
    }

    const userPayload: IJwtPayload = {
      id: theUser.id,
      role: theUser.role,
    };

    return this.jwtService.sign(userPayload);
  }

  public validateUser(payload: IJwtPayload) {
    return payload;
  }
}
