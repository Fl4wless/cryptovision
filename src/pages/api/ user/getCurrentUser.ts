import { NextApiRequest, NextApiResponse } from 'next';

const getCurrentUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('req.body', req.body);

  //   const userId = req.body;

  return res.status(200).json({ message: 'done' });
};
