/*
  Warnings:

  - You are about to drop the column `bookId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "cartId" INTEGER;

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "bookId";

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_unique" ON "Cart"("userId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
