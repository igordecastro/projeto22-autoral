import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import appointmentService from '@/services/appointment-service';
import { AuthenticatedRequest } from "@/middlewares";

export async function createAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { date, professional_id } = req.body;
  const { userId } = req;

  try {
    await appointmentService.createAppointment(date, +professional_id, userId);
    return res.status(httpStatus.CREATED).send({ message: "Created!"})
  } catch (error) {
    next(error);
  }
}

export async function getAppointments(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  try {
    const appointments = appointmentService.getUserAppointments(userId);
    return res.status(httpStatus.OK).send(appointments);
  } catch (error) {
    next(error);
  }
}

export async function updateAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(error);
  }
}

export async function deleteAppointment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
  } catch (error) {
    next(error);
  }
}
