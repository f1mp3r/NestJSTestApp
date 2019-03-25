import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoleUpdateInput {
  @ApiModelProperty()
  @IsNotEmpty()
  public name: string;
}
