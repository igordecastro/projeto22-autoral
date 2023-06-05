import { ApplicationError } from '@/protocols';

import { public_pacients } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { exclude } from '@/utils/prisma-utils';
import pacientRepository from '@/repositories/pacient-repository';
import sessionRepository from '@/repositories/session-repository';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await pacientRepository.findByEmail(email, { id: true, email: true, password: true });
  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<public_pacients, 'email' | 'password'>;

type SignInResult = {
  user: Pick<public_pacients, 'id' | 'email'>;
  token: string;
};

type GetUserOrFailResult = Pick<public_pacients, 'id' | 'email' | 'password'>;

const authenticationService = {
  signIn,
};

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'email or password are incorrect',
  };
}

export default authenticationService;
