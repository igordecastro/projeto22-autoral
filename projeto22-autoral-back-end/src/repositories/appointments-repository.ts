import { prisma } from '@/config';

async function createAppointment(date: string, professional_id: number, userId: number) {
  return prisma.public_appointments.create({ 
    data: { 
      date,
      professional_id,
      patient_id: userId,
    }
  });
}

async function getAppointmentByDate(date: string) {
  return prisma.public_appointments.findFirst({
    where: {
      date,
    }
  });
}

async function getAppointmentByUser(userId: number) {
  return prisma.public_appointments.findMany({
    where:{
      patient_id: userId
    }
  });
}

const appointmentsRepository = {
  createAppointment,
  getAppointmentByDate,
  getAppointmentByUser,
};

export default appointmentsRepository;
