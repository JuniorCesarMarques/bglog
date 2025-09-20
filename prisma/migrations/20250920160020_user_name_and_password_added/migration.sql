/*
  Warnings:

  - You are about to drop the column `name` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `password` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Driver" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
