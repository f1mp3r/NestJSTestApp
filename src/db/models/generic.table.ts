import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class GenericTable {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @Column({ select: false, default: false, name: 'is_deleted' })
  public isDeleted: boolean;
}
