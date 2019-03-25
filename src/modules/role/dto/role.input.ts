import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoleInput {
  @ApiModelProperty()
  @IsNotEmpty()
  public name: string;
}
