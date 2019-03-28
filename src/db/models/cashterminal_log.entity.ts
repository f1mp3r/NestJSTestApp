import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'cashterminal_logs' })
export class CashTerminalLog {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('decimal', { precision: 10, scale: 4 })
  public amount: number;

  @Column('decimal', { precision: 10, scale: 4, name: 'old_balance' })
  public oldBalance: number;

  @Column('decimal', { precision: 10, scale: 4, name: 'new_balance' })
  public newBalance: number;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(type => User)
  public user: User;

  @Column({
    type: 'int',
    name: 'user_id',
    nullable: true,
  })
  public userId: number;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  public createdAt: Date;
}