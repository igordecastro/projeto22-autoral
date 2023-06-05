import { public_pacients } from '@prisma/client';
import bcrypt from 'bcrypt';
import pacientRepository from '@/repositories/pacient-repository';
import { ApplicationError } from '@/protocols';

export async function createPacient({ email, password }: CreatePacientParams): Promise<public_pacients> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return pacientRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await pacientRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreatePacientParams = Pick<public_pacients, 'email' | 'password'>;

const pacientService = {
  createPacient,
};

export function duplicatedEmailError(): ApplicationError {
  return {
    name: 'DuplicatedEmailError',
    message: 'There is already an user with given email',
  };
}

export default pacientService;
