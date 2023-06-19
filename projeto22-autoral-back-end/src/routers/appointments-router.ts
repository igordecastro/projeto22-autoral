import { Router } from 'express';
import { createAppointment, getAppointments, deleteAppointment, updateAppointment } from '@/controllers/appointments-controller';
import { authenticateToken } from '@/middlewares';

const appointmentsRouter = Router();

appointmentsRouter
  .all('/*', authenticateToken)
  .post('/', createAppointment)
  .get('/', getAppointments)
  .delete('/:id', deleteAppointment)
  .put('/:id', updateAppointment);

export { appointmentsRouter };
