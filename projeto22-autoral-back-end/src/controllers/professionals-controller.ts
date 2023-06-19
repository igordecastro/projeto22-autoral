import professionalsService from '@/services/professionals-service';
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function getProfessionals(req: Request, res: Response, next: NextFunction) {
  try {
    const professionals = await professionalsService.getProfessionals();
    return res.status(httpStatus.OK).send(professionals)
  } catch (error) {
    next(error)
  }
}