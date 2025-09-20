/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Driver_userName_key" ON "public"."Driver"("userName");
