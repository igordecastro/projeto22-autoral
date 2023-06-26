import { prisma } from "@/config";

function findById (id: number) {
  try {
    return prisma.public_schedule.findFirst({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};

async function updatedSchedule(id: number) {
  try {
    await prisma.public_schedule.updateMany({
      where: { id },
      data: { available: false },
    });
  } catch (error) {
    throw error;
  }
}




export default { findById, updatedSchedule };
