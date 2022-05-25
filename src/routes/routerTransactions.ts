import express from 'express';
import { Client } from '../entities/Client';
import { Transaction, TransactionType } from '../entities/Transaction';

const router = express.Router();

router.post('/api/client/:id/transactions', async (req, res): Promise<any> => {
  const { id } = req.params;
  const { type, amount } = req.body;

  const client = await Client.findOne({ where: { id: parseInt(id) } });

  if (!client) return res.json({ msg: 'data tidak ada' });
  console.log(client);

  const transaction = Transaction.create({ type, amount, client });

  await transaction.save();
  console.log(typeof client.balance);
  console.log(typeof transaction.amount);

  if (type === TransactionType.DEPOSITE) {
    client.balance = client.balance + amount;
  } else if (type === TransactionType.WITHDRAW) {
    client.balance = client.balance - amount;
  }

  console.log(typeof client.balance);
  await client.save();

  res.status(200).json({ msg: 'data berhasil di simpan' });
});

router.get('/transactions', async (req, res) => {
  try {
    const data = await Transaction.findOne({ where: { id: 1 } });

    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

export { router as createRouterTransactions };
