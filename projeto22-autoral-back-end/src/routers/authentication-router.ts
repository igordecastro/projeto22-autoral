import { Router } from 'express';
import { signInPost } from '@/controllers/authentication-controller';
import { validateBody } from '@/middlewares';
import { signInSchema } from '@/schemas';

const authenticationRouter = Router();

authenticationRouter.post('', validateBody(signInSchema), signInPost);

export { authenticationRouter };
