import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findByEmail(email: string, select?: Prisma.public_patientsSelect) {
  const params: Prisma.public_patientsFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.public_patients.findUnique(params);
}

async function create(data: Prisma.public_patientsUncheckedCreateInput) {
  return prisma.public_patients.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
