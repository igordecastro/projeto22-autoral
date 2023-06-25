-- CreateTable
CREATE TABLE "public_schedule" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "available" BOOLEAN NOT NULL,
    "professional_id" INTEGER NOT NULL,

    CONSTRAINT "public_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public_schedule" ADD CONSTRAINT "public_schedule_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "public.professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
