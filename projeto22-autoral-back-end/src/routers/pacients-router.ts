import { Router } from 'express';

import { createUserSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { pacientsPost } from '@/controllers/pacients-controller';

const pacientsRouter = Router();

pacientsRouter.post('/', validateBody(createUserSchema), pacientsPost);

export { pacientsRouter };
