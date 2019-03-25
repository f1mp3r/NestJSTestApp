import { ApiModelProperty } from '@nestjs/swagger';

export class InfoResponseDTO {
  @ApiModelProperty()
  public info: boolean;
}
