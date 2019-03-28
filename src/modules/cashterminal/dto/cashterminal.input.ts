import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsPositive } from 'class-validator';

const ACTION_DEPOSIT: string = 'deposit';
const ACTION_WITHDRAW: string = 'withdraw';

export class CashTerminalInput {
    @ApiModelProperty({
        description: 'Positive number of the cash to be withdrawn or deposited'
    })
    @IsNotEmpty()
    @IsPositive()
    @Transform(value => Number(value))
    public value: number;

    @ApiModelProperty({
        required: true,
        description: `${ACTION_DEPOSIT} or ${ACTION_WITHDRAW}`
    })
    @IsIn([ACTION_DEPOSIT, ACTION_WITHDRAW])
    @Transform(action => String(action).toLowerCase())
    public action: string;

    public isDeposit(): boolean {
        return this.action === ACTION_DEPOSIT;
    }
}
