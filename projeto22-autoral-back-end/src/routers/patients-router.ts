import { Router } from 'express';

import { createUserSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { patientsPost } from '@/controllers/patients-controller';

const patientsRouter = Router();

patientsRouter.post('', validateBody(createUserSchema), patientsPost);

export { patientsRouter };
