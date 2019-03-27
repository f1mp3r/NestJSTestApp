import { Inject, Injectable } from '@nestjs/common';
import { BaseErrorService } from '../../../modules/common/services/base-error.service';

@Injectable()
export class CashTerminalServiceErr extends BaseErrorService {
  private readonly errors = {
    MISSING_BALANCE_ENTRY: {
        bg: () => (
          this.i18n.__n('CASHTERMINAL_ERRORS.MISSING_BALANCE_ENTRY')
        ),
        en: () => true
      },
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
}
