import { ApiModelProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CashTerminalOutput {
    @Expose()
    @ApiModelProperty()
    public balance: number;
}