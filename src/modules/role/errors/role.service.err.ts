import { Inject, Injectable } from '@nestjs/common';
import { BaseErrorService } from '../../../modules/common/services/base-error.service';

@Injectable()
export class RoleServiceErr extends BaseErrorService {
  private errors = {
    AE_ROLE_NAME: {
      bg: (roleName: string) => (
        this.i18n.__n('ENTITY_FAILS.ALREADY_EXIST {{type, property, value}}', 1, {
          type: this.i18n.__n('ENTITIES.ROLE', 1),
          property: this.i18n.__n('PROPERTIES.NAME', 1),
          value: roleName,
        })
      ),
      en: () => true
    },
    CD_ROLE_IN_USE: {
      bg: (roleName: string) => (
        this.i18n.__n('ENTITY_FAILS.CANNOT_DELETE {{subject, value, reason}}.f', 1, {
          subject: this.i18n.__n('ENTITIES.ROLE'),
          value: roleName,
          reason: this.i18n.__n('CANNOT_DELETE_REASONS.IN_USE'),
        })
      ),
    }
  };

  constructor(
    @Inject('i18n')
    protected readonly i18n,
  ) {
    super(i18n);
  }

  public AE_ROLE_NAME(roleName: string): never {
    throw new Error(
      this.errors.AE_ROLE_NAME[this.lang](roleName)
    );
  }

  public CD_ROLE_IN_USE(roleName: string): never {
    throw new Error(
      this.errors.AE_ROLE_NAME[this.lang](roleName)
    );
  }
}
