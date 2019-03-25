import { Column, Entity } from 'typeorm';
import { GenericTable } from './generic.table';

@Entity({ name: 'roles' })
export class Role extends GenericTable {
  @Column({ length: 60 })
  public name: string;
}
