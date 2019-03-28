import { Inject, Injectable } from '@nestjs/common';
import { BaseErrorService } from '../../../modules/common/services/base-error.service';

@Injectable()
export class CashTerminalServiceErr extends BaseErrorService {
  private readonly errors = {
    MISSING_BALANCE_ENTRY: {
      bg: () => {
        return this.i18n.__n('CASHTERMINAL_ERRORS.MISSING_BALANCE_ENTRY');
      },
      en: () => true
    },
    INSUFFICIENT_FUNDS: {
      bg: (balance) => {
        return this.i18n.__n('CASHTERMINAL_ERRORS.INSUFFICIENT_FUNDS', 1, { balance });
      },
      en: () => true
    }
  };

  constructor(
    @Inject('i18n')
    protected readonly i18n,
  ) {
    super(i18n);
  }

  public NF_CASHTERMINAL_BALANCE_ENTRY(): never {
    throw new Error(
      this.errors.MISSING_BALANCE_ENTRY[this.lang]()
    );
  }

  public CNT_WITHDRAW_INSUFFICIENT_FUNDS(balance: number): void {
    throw new Error(
      this.errors.INSUFFICIENT_FUNDS[this.lang](balance)
    );
  }
}
