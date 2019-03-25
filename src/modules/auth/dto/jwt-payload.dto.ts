import { ApiModelProperty } from '@nestjs/swagger';
import { Role } from '../../../db/models/role.entity';

export class JwtPayloadDTO {
  @ApiModelProperty()
  public id: number;

  @ApiModelProperty()
  public role: Role;
}
