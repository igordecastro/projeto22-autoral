import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import patientService from '@/services/patients-service';

export async function patientsPost(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user = await patientService.createpatient({ email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error)
  }
}
