import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { InfoResponseDTO } from '../../common/dto/info-response.dto';
import { ParamIdInput } from '../../common/dto/params-id.input';
import { UserInput } from '../dto/user.input';
import { UserWithRoleOutput } from '../dto/user.output';
import { UserService } from '../service/user.service';

@Controller('user')
@ApiUseTags('User')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @ApiCreatedResponse({ description: 'The user has been successfully created!', type: UserWithRoleOutput })
  @Post('createNewUser')
  public async createNewUser(@Body() data: UserInput) {
    const newUser = await this.userService.createNewUser(data).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(UserWithRoleOutput, newUser, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'Users data have been successfully updated!', type: UserWithRoleOutput })
  @Put('updateUser/:id')
  public async updateUser(@Param() param: ParamIdInput, @Body() data: UserInput) {
    const updatedUser = await this.userService.updateUser(param.id, data).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(UserWithRoleOutput, updatedUser, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'The user has been deleted!', type: InfoResponseDTO })
  @Delete('deleteUser/:id')
  public async deleteUser(@Param() param: ParamIdInput) {
    const isDeleted = await this.userService.deleteUser(param.id).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return {
      info: isDeleted,
    };
  }

  @ApiCreatedResponse({ description: 'Get a specific user with his role!', type: UserWithRoleOutput })
  @Get('getUser/:id')
  public async getUser(@Param() param: ParamIdInput) {
    const theUser = await this.userService.getUser(param.id).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(UserWithRoleOutput, theUser, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'Get all users with their roles!', type: [UserWithRoleOutput] })
  @Get('getAllUsers')
  public async getAllUsers() {
    const theUsers = await this.userService.getAllUsers().catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(UserWithRoleOutput, theUsers, { strategy: 'excludeAll' });
  }
}
