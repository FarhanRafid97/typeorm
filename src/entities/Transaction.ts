import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionType {
  DEPOSITE = 'deposite',
  WITHDRAW = 'withdraw',
}

@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: TransactionType })
  type: string;

  @Column({ type: 'integer' })
  amount: number;

  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: 'clientId',
  })
  client: Client;
}
