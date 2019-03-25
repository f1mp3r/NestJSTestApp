import { ApiModelProperty } from '@nestjs/swagger';

export class SuccessAuthDTO {
  @ApiModelProperty()
  public token: string;
}
