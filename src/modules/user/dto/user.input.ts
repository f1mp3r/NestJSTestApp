import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UserInput {
  @ApiModelProperty()
  @IsNotEmpty()
  public firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  public lastName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  public pinCode: string;

  @ApiModelProperty()
  @IsNotEmpty()
  public email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  public phone: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Transform(value => Number(value))
  public roleId: number;
}
