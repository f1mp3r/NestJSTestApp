import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { GenericTableOutput } from '../../common/dto/generic.output';
import { RoleOutput } from '../../role/dto/role.output';

export class UserOutput extends GenericTableOutput {
  @Expose()
  @ApiModelProperty()
  public id: number;

  @Expose()
  @ApiModelProperty()
  public firstName: string;

  @Expose()
  @ApiModelProperty()
  public lastName: string;

  @Expose()
  @ApiModelProperty()
  public email: string;

  @Expose()
  @ApiModelProperty()
  public phone: string;

  @Expose()
  @ApiModelProperty()
  public pinCode: string;
}

export class UserOutputWithoutPinCode extends UserOutput {
  @Exclude()
  @ApiModelProperty()
  public pinCode: string;
}

export class UserWithRoleOutput extends UserOutput {
  @Expose()
  @Type(() => RoleOutput)
  @ApiModelProperty()
  public role: RoleOutput;
}
