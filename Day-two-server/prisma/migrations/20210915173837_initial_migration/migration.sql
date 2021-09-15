/*
  Warnings:

  - You are about to drop the column `cartId` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_cartId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "cartId";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "bookId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cart_bookId_unique" ON "Cart"("bookId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
