-- CreateEnum
CREATE TYPE "public"."DeliveryStatus" AS ENUM ('PENDING', 'ON_ROUTE', 'AT_CLIENT', 'DELIVERED');

-- CreateTable
CREATE TABLE "public"."Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Delivery" (
    "id" TEXT NOT NULL,
    "chaveCTe" TEXT NOT NULL,
    "numeroCTe" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "status" "public"."DeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "emitente" TEXT NOT NULL,
    "remetente" TEXT NOT NULL,
    "destinatario" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "produto" TEXT,
    "quantidade" TEXT,
    "valorFrete" DOUBLE PRECISION,
    "qrCode" TEXT,
    "protocolo" TEXT,
    "driverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Receipt" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryId" TEXT NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_cpf_key" ON "public"."Driver"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_chaveCTe_key" ON "public"."Delivery"("chaveCTe");

-- AddForeignKey
ALTER TABLE "public"."Delivery" ADD CONSTRAINT "Delivery_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Receipt" ADD CONSTRAINT "Receipt_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "public"."Delivery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
