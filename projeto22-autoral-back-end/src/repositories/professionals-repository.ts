import { prisma } from "@/config";

function getProfessionals(){
  return prisma.public_professionals.findMany();
}

const professionalsRepository = {
  getProfessionals,
}

export default professionalsRepository;