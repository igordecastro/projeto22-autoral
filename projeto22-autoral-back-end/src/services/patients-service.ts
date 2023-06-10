import { public_patients } from '@prisma/client';
import bcrypt from 'bcrypt';
import patientRepository from '@/repositories/patient-repository';
import { ApplicationError } from '@/protocols';

export async function createpatient({ email, password }: CreatepatientParams): Promise<public_patients> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return patientRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await patientRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreatepatientParams = Pick<public_patients, 'email' | 'password'>;

const patientService = {
  createpatient,
};

export function duplicatedEmailError(): ApplicationError {
  return {
    name: 'DuplicatedEmailError',
    message: 'There is already an user with given email',
  };
}

export default patientService;
