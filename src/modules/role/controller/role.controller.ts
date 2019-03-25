import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { InfoResponseDTO } from '../../../modules/common/dto/info-response.dto';
import { ParamIdInput } from '../../common/dto/params-id.input';
import { RoleService } from '../service/role.service';
import { RoleUpdateInput } from './../dto/role-update.input';
import { RoleInput } from './../dto/role.input';
import { RoleOutput } from './../dto/role.output';

@ApiUseTags('Role')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller('role')
export class RoleController {
  constructor(
    private readonly roleService: RoleService,
  ) { }

  @ApiCreatedResponse({ description: 'The role has been successfully created!', type: RoleOutput })
  @Post('createNewRole')
  public async createRole(@Body() data: RoleInput) {
    const theNewRole = await this.roleService.createNewRole(data).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(RoleOutput, theNewRole, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'The role has been updated!', type: RoleOutput })
  @Put('updateRole/:id')
  public async updateRole(@Param() param: ParamIdInput, @Body() data: RoleUpdateInput) {
    const theUpdatedRole = await this.roleService.updateRole(param.id, data).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(RoleOutput, theUpdatedRole, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'The role has been deleted!', type: InfoResponseDTO })
  @Delete('deleteRole/:id')
  public async deleteRole(@Param() param: ParamIdInput) {
    const result = await this.roleService.deleteRole(param.id).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return {
      info: result,
    };
  }

  @ApiCreatedResponse({ description: 'Returns the role with the routes!', type: RoleOutput })
  @Get('getRole/:id')
  public async getRole(@Param() param: ParamIdInput) {
    const theRole = await this.roleService.getRole(param.id).catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(RoleOutput, theRole, { strategy: 'excludeAll' });
  }

  @ApiCreatedResponse({ description: 'Returns all roles!', type: [RoleOutput] })
  @Get('getAllRoles')
  public async getAllRoles() {
    const theRoles = await this.roleService.getAllRoles().catch((error) => {
      throw new BadRequestException(error.message);
    });

    return plainToClass(RoleOutput, theRoles, { strategy: 'excludeAll' });
  }
}
