import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function create(data: Prisma.public_sessionUncheckedCreateInput) {
  return prisma.public_session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
