import Joi from 'joi';
import { CreatepatientParams } from '@/services/patients-service';

export const createUserSchema = Joi.object<CreatepatientParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
