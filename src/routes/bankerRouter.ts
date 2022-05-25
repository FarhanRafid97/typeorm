import express from 'express';
import { Banker } from '../entities/Banker';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, cardId, employeNumber } =
    req.body;
  try {
    const banker = Banker.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      cardId,
      employeNumber,
    });
    await banker.save();
    res.status(200).json(banker);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

export { router as createBankerRouter };
