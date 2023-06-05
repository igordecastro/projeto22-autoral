import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findByEmail(email: string, select?: Prisma.public_pacientsSelect) {
  const params: Prisma.public_pacientsFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.public_pacients.findUnique(params);
}

async function create(data: Prisma.public_pacientsUncheckedCreateInput) {
  return prisma.public_pacients.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
