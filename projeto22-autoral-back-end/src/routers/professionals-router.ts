import { Router } from 'express';
import { getProfessionals } from '@/controllers/professionals-controller';

const professionalsRouter = Router();

professionalsRouter
  .get('', getProfessionals)

export { professionalsRouter }