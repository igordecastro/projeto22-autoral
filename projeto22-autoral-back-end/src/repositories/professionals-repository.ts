import { prisma } from '@/config';

function getProfessionals(){
  return prisma.public_professionals.findMany({
    include: {
      public_schedule: {
        where: {available: true},
        take: 4,
      }
    }
  });
}

const professionalsRepository = {
  getProfessionals,
}

export default professionalsRepository;