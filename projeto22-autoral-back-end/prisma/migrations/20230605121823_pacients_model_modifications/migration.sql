/*
  Warnings:

  - Added the required column `address` to the `public.pacients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `public.pacients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public.pacients" ADD COLUMN     "address" VARCHAR NOT NULL,
ADD COLUMN     "health_ensurance" VARCHAR,
ADD COLUMN     "password" VARCHAR NOT NULL;
