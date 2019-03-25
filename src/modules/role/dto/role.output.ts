import { ApiModelProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { GenericTableOutput } from '../../common/dto/generic.output';

export class RoleOutput extends GenericTableOutput {
  @ApiModelProperty()
  @Expose()
  public name: string;
}
