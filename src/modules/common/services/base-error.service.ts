import { BadRequestException } from '@nestjs/common';

/*
  NF - Not Found
  AE - Already Exist
  CD - Cannot Delete
  CNT - CANNOT
*/

/*
  NF_RECIPE_ELEMENT_ID & NF_ROUTE_ID are not implemented yet!
*/

export abstract class BaseErrorService {
  protected lang = process.env.APP_LANG || 'bg';
  protected readonly i18n;

  protected baseErrors = {
    NF_MENU_CATEGORY_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.MENU_CATEGORY', 1) }
        )
      ),
      en: () => true
    },
    NF_MENU_ELEMENT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.MENU_ELEMENT', 1) }
        )
      ),
      en: () => true,
    },
    NF_MENU_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.middle', 1,
          { entityName: this.i18n.__n('ENTITIES.MENU', 1) }
        )
      ),
      en: () => true,
    },
    NF_PRODUCT_CATEGORY_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.PRODUCT_CATEGORY', 1) }
        )
      ),
      en: () => true,
    },
    NF_PRODUCT_VARIATION_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.PRODUCT_VARIATION', 1) }
        )
      ),
      en: () => true,
    },
    NF_PRODUCT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.PRODUCT', 1) }
        )
      ),
      en: () => true,
    },
    NF_RECIPE_ELEMENT_ID: {
      bg: () => true,
      en: () => true,
    },
    NF_RECIPE_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.RECIPE', 1) }
        )
      ),
      en: () => true,
    },
    NF_ROLE_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.ROLE', 1) }
        )
      ),
      en: () => true,
    },
    NF_ROUTE_ID: {
      bg: () => true,
      en: () => true,
    },
    NF_UNIT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.f', 1,
          { entityName: this.i18n.__n('ENTITIES.UNIT', 1) }
        )
      ),
      en: () => true,
    },
    NF_USER_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.USER', 1) }
        )
      ),
      en: () => true,
    },
    NF_WAREHOUSE_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.WAREHOUSE', 1) }
        )
      ),
      en: () => true,
    },
    NF_SUPPLIER_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.SUPPLIER', 1) }
        )
      ),
      en: () => true,
    },
    NF_INTAKE_STOCK_RECEIPT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.INTAKE_STOCK_RECEIPT', 1) }
        )
      )
    },
    NF_DISPATCH_STOCK_RECEIPT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.DISPATCH_STOCK_RECEIPT', 1) }
        )
      )
    },
    NF_PURCHASE_ORDER_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.PURCHASE_ORDER', 1) }
        )
      )
    },
    NF_REVISION_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.REVISION', 1) }
        )
      )
    },
    NF_PRODUCTS_SCRAPPING_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.PRODUCTS_SCRAPPING', 1) }
        )
      )
    },
    NF_ELEMENT_ID: {
      bg: () => (
        this.i18n.__n(
          'ENTITY_FAILS.NOT_FOUND {{entityName}}.m', 1,
          { entityName: this.i18n.__n('ENTITIES.ELEMENT', 1) }
        )
      )
    },
    UN_EXPECTED: {
      bg: (errorNum: number) => (
        this.i18n.__n('UNEXPECTED {{number}}', 1, {
          number: errorNum,
        })
      ),
      en: () => true,
    },
    WRONG_UNITS_RELATION: {
      bg: () => (
        this.i18n.__n('PRODUCT_ERRORS.WRONG_UNITS_RELATION')
      ),
      en: () => true
    },
  };

  constructor(i18n) {
    this.i18n = i18n;
  }

  public NF_MENU_CATEGORY_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_MENU_CATEGORY_ID[this.lang]()
    );
  }

  public NF_MENU_ELEMENT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_MENU_ELEMENT_ID[this.lang]()
    );
  }

  public NF_MENU_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_MENU_ID[this.lang]()
    );
  }

  public NF_PRODUCT_CATEGORY_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_PRODUCT_CATEGORY_ID[this.lang]()
    );
  }

  public NF_PRODUCT_VARIATION_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_PRODUCT_VARIATION_ID[this.lang]()
    );
  }

  public NF_PRODUCT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_PRODUCT_ID[this.lang]()
    );
  }

  public NF_RECIPE_ELEMENT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_RECIPE_ELEMENT_ID[this.lang]()
    );
  }

  public NF_RECIPE_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_RECIPE_ID[this.lang]()
    );
  }

  public NF_ROLE_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_ROLE_ID[this.lang]()
    );
  }

  public NF_ROUTE_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_ROUTE_ID[this.lang]()
    );
  }

  public NF_UNIT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_UNIT_ID[this.lang]()
    );
  }

  public NF_USER_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_USER_ID[this.lang]()
    );
  }

  public NF_WAREHOUSE_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_WAREHOUSE_ID[this.lang]()
    );
  }

  public NF_SUPPLIER_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_SUPPLIER_ID[this.lang]()
    );
  }

  public NF_INTAKE_STOCK_RECEIPT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_INTAKE_STOCK_RECEIPT_ID[this.lang]()
    );
  }

  public NF_DISPATCH_STOCK_RECEIPT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_DISPATCH_STOCK_RECEIPT_ID[this.lang]()
    );
  }

  public NF_PURCHASE_ORDER_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_PURCHASE_ORDER_ID[this.lang]()
    );
  }

  public NF_ELEMENT_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_ELEMENT_ID[this.lang]()
    );
  }

  public NF_REVISION_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_REVISION_ID[this.lang]()
    );
  }

  public NF_PRODUCTS_SCRAPPING_ID(): never {
    throw new BadRequestException(
      this.baseErrors.NF_PRODUCTS_SCRAPPING_ID[this.lang]()
    );
  }

  public UNEXPECTED(errorNum = 1): never {
    throw new BadRequestException(
      this.baseErrors.UN_EXPECTED[this.lang](errorNum)
    );
  }

  public WRONG_UNITS_RELATION(): never {
    throw new BadRequestException(
      this.baseErrors.WRONG_UNITS_RELATION[this.lang]()
    );
  }

  // TODO: Translate errors
  public NM_PRODUCT_VARIATION_ID(): never {
    throw new BadRequestException('NM_PRODUCT_VARIATION_ID');
  }

  public NM_PRODUCT_ID(): never {
    throw new BadRequestException('NM_PRODUCT_ID');
  }

  public NM_REVISION_ID(): never {
    throw new BadRequestException('NM_REVISION_ID');
  }

  public NR_REVISION_ELEMENT(): never {
    throw new BadRequestException('NR_REVISION_ELEMENT');
  }
}
