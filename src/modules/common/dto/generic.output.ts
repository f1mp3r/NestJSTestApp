import { ApiModelProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GenericTableOutput {
  @ApiModelProperty()
  @Expose()
  public id: number;

  @ApiModelProperty()
  @Expose()
  public createdAt: Date;

  @ApiModelProperty()
  @Expose()
  public updatedAt: Date;
}
