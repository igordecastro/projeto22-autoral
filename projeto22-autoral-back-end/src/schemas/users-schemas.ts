import Joi from 'joi';
import { CreatePacientParams } from '@/services/pacients-service';

export const createUserSchema = Joi.object<CreatePacientParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
