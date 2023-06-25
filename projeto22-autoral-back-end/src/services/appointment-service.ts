import { badRequestError, conflictError } from '@/errors';
import appointmentsRepository from '@/repositories/appointments-repository';

async function createAppointment(date: string, professional_id: number, userId: number) {
    return appointmentsRepository.createAppointment(date, professional_id, userId);
}

async function getUserAppointments(userId: number) {
  return appointmentsRepository.getAppointmentByUser(userId);
}

const appointmentService = {
  createAppointment,
  getUserAppointments
}

export default appointmentService;