import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, cardId, balance } = req.body;
  try {
    const client = Client.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      cardId,
      balance,
    });
    await client.save();
    console.log(typeof client.balance);
    res.status(200).json(client);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

export { router as createUserRouter };
