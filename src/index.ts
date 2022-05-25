import express from 'express';
import { createConnection } from 'typeorm';
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transaction';
import { createUserRouter } from './routes/router';
import { createBankerRouter } from './routes/bankerRouter';
import { createRouterTransactions } from './routes/routerTransactions';
const app = express();
const PORT: number = 8080;
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
    app.use(express.json());
    app.use(createUserRouter);
    app.use(createBankerRouter);
    app.use(createRouterTransactions);
    console.log('connect success');
    app.listen(PORT, () => console.log(`app listen at ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
main();
