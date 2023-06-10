import { Request, Response } from 'express';
import httpStatus from 'http-status';
import appointmentService from '@/services/appointment-service';

export async function createAppointment(req: Request, res: Response) {
  const { date, schedule } = req.body;

  try {
  } catch (err) {}
}

export async function getAppointments(req: Request, res: Response) {
  try {
  } catch (err) {}
}

export async function updateAppointment(req: Request, res: Response) {
  try {
  } catch (err) {}
}

export async function deleteAppointment(req: Request, res: Response) {
  try {
  } catch (err) {}
}
