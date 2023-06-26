import { prisma } from '@/config';

function getProfessionals(){
  return prisma.public_professionals.findMany({
    include: {
      public_schedule: {
        take: 4,
      }
    }
  });
}

const professionalsRepository = {
  getProfessionals,
}

export default professionalsRepository;