import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cashterminal' })
export class CashTerminal {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('decimal', { precision: 10, scale: 4, default: 0 })
    public balance: number;
}