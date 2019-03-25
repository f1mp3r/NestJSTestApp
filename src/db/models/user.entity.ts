// tslint:disable:variable-name
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { GenericTable } from './generic.table';
import { Role } from './role.entity';

@Entity({ name: 'users' })
export class User extends GenericTable {
  @Column({ length: 60, name: 'first_name' })
  public firstName: string;

  @Column({ length: 60, name: 'last_name' })
  public lastName: string;

  @Column({ length: 140, default: '' })
  public avatar: string;

  @Column({ length: 42, name: 'pin_code' })
  public pinCode: string;

  @Column({ length: 80 })
  public email: string;

  @Column({ length: 80 })
  public phone: string;

  @JoinColumn({ name: 'role_id' })
  @ManyToOne(type => Role)
  public role: Role;

  @Column({
    type: 'int',
    name: 'role_id',
    nullable: true,
  })
  public roleId: number;
}
