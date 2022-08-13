import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../server/db/client';

const addPrediction = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await prisma.prediction.create({
    data: req.body.data,
  });

  return res.status(200).json({ message: 'OK' });
};

export default addPrediction;
