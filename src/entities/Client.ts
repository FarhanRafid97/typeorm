import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'numeric' })
  balance: number;

  @Column({ unique: true, length: 10 })
  cardId: string;

  @Column({ type: 'simple-array', default: [] })
  friends: string[];

  @OneToMany(() => Transaction, (transactions) => transactions.client)
  transactions: Transaction;

  @Column({ type: 'simple-json', nullable: true })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @ManyToMany(() => Banker)
  bankers: Banker;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
