import { EntityManager, FindOneOptions, ObjectLiteral, Repository, UpdateResult } from 'typeorm';

export abstract class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
  constructor() {
    super();
  }

  public async getOneOrFail(options: FindOneOptions<T> = {}, isDeleted = false): Promise<T> {
    options.where = Object.assign(options.where || {}, {
      isDeleted,
    });

    const result = await this.findOne(options);

    if (!result) {
      return Promise.reject('There is no such an entity!');
    }

    return result;
  }

  public async getAll(options: FindOneOptions<T> = {}, isDeleted = false): Promise<T[]> {
    options.where = Object.assign(options.where || {}, {
      isDeleted,
    });

    const result = await this.find(options);

    return result;
  }

  public async failIfThereIs(options: FindOneOptions<T> = {}, isDeleted = false): Promise<boolean> {
    options.where = Object.assign(options.where || {}, {
      isDeleted,
    });

    const result = await this.findOne(options);

    if (result) {
      return Promise.reject('There is such an entity!');
    }

    return false;
  }

  public async softDelete(entity: T): Promise<UpdateResult> {
    return this.createQueryBuilder()
      .update(entity)
      .set({ isDeleted: true })
      .where({ id: entity.id })
      .execute();
  }
}
