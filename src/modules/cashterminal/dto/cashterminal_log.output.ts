import { ApiModelProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CashTerminalLogOutput {
    @Expose()
    @ApiModelProperty({
        description: 'Amount of money moved. Positive is deposited, negative is withdrawn'
    })
    public amount: number;

    @Expose()
    @ApiModelProperty({
        description: 'Balance before transaction'
    })
    public oldBalance: number;

    @Expose()
    @ApiModelProperty({
        description: 'Balance after transaction'
    })
    public newBalance: number;

    @Expose()
    @ApiModelProperty({
        description: 'ID of the transaction user'
    })
    public userId: number;

    @Expose()
    @ApiModelProperty()
    public createdAt: Date;
}