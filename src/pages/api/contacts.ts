import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../server/db/client';

const contacts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const contactData = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: contactData,
  });

  res.json(savedContact);
};

export default contacts;
