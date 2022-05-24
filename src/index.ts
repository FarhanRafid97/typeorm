import { createConnection } from 'typeorm';
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transaction';

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'farhan_binar',
      password: 'farhan322',
      database: 'typeorm_db',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log('connect success');
  } catch (error) {
    console.log(error);
  }
};
main();
