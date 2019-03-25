import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiModelProperty()
  @IsNotEmpty()
  public pinCode: string;
}
