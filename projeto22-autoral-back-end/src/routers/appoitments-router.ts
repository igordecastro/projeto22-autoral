import { Router } from 'express';
import { createAppointment, getAppointments, deleteAppointment, updateAppointment } from '@/controllers/appointments-controller';

const appointmentsRouter = Router();

appointmentsRouter
  .post('', createAppointment)
  .get('', getAppointments)
  .delete('', deleteAppointment)
  .put('', updateAppointment);

export { appointmentsRouter };
