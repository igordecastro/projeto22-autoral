-- CreateTable
CREATE TABLE "public_session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "public_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.appointments" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "professional_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "appointments_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.patients" (
    "id" SERIAL NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "cpf" INTEGER NOT NULL,
    "birth_day" DATE NOT NULL,

    CONSTRAINT "patients_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.professionals" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "specialty" VARCHAR NOT NULL,

    CONSTRAINT "professionals_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "public.patients_email_key" ON "public.patients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "public.patients_cpf_key" ON "public.patients"("cpf");

-- AddForeignKey
ALTER TABLE "public_session" ADD CONSTRAINT "public_session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public.patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public.appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("patient_id") REFERENCES "public.patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public.appointments" ADD CONSTRAINT "appointments_fk1" FOREIGN KEY ("professional_id") REFERENCES "public.professionals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
