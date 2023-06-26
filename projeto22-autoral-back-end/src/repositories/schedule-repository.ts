import { prisma } from "@/config";

function findById (id: number) {
  try {
    return prisma.public_schedule.findFirst({
      where: { id }
    });
  } catch (error) {
    throw error;
  }
};

function updatedSchedule(id: number){
  prisma.public_schedule.update({
    where: { id },
    data: { available: false }, 
  });
};


export default { findById, updatedSchedule };
