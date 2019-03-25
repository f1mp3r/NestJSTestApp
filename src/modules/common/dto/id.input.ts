import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class IdInput {
  @ApiModelProperty()
  @IsNotEmpty()
  @Transform(value => Number(value))
  public id: number;
}