import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { LoginDTO } from '../dto/login.dto';
import { SuccessAuthDTO } from '../dto/success-auth.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @ApiUseTags('Authentication')
  @ApiCreatedResponse({ description: 'The user has been authenticated successfully.', type: SuccessAuthDTO })
  @Post('login')
  public async login(@Body() data: LoginDTO) {
    const token = await this.authService.login(data);

    return {
      token,
    };
  }
}