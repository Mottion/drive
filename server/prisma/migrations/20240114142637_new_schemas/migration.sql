/*
  Warnings:

  - Added the required column `ownerId` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_AccessFolders" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FolderToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_foldersWrite" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_foldersDelete" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_foldersUpdate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_foldersShare" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AccessFiles" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FileToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_filesWrite" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_filesDelete" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_filesUpdate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_filesShare" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AccessFolders_AB_unique" ON "_AccessFolders"("A", "B");

-- CreateIndex
CREATE INDEX "_AccessFolders_B_index" ON "_AccessFolders"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FolderToProfile_AB_unique" ON "_FolderToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_FolderToProfile_B_index" ON "_FolderToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_foldersWrite_AB_unique" ON "_foldersWrite"("A", "B");

-- CreateIndex
CREATE INDEX "_foldersWrite_B_index" ON "_foldersWrite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_foldersDelete_AB_unique" ON "_foldersDelete"("A", "B");

-- CreateIndex
CREATE INDEX "_foldersDelete_B_index" ON "_foldersDelete"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_foldersUpdate_AB_unique" ON "_foldersUpdate"("A", "B");

-- CreateIndex
CREATE INDEX "_foldersUpdate_B_index" ON "_foldersUpdate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_foldersShare_AB_unique" ON "_foldersShare"("A", "B");

-- CreateIndex
CREATE INDEX "_foldersShare_B_index" ON "_foldersShare"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AccessFiles_AB_unique" ON "_AccessFiles"("A", "B");

-- CreateIndex
CREATE INDEX "_AccessFiles_B_index" ON "_AccessFiles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FileToProfile_AB_unique" ON "_FileToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_FileToProfile_B_index" ON "_FileToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_filesWrite_AB_unique" ON "_filesWrite"("A", "B");

-- CreateIndex
CREATE INDEX "_filesWrite_B_index" ON "_filesWrite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_filesDelete_AB_unique" ON "_filesDelete"("A", "B");

-- CreateIndex
CREATE INDEX "_filesDelete_B_index" ON "_filesDelete"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_filesUpdate_AB_unique" ON "_filesUpdate"("A", "B");

-- CreateIndex
CREATE INDEX "_filesUpdate_B_index" ON "_filesUpdate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_filesShare_AB_unique" ON "_filesShare"("A", "B");

-- CreateIndex
CREATE INDEX "_filesShare_B_index" ON "_filesShare"("B");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessFolders" ADD CONSTRAINT "_AccessFolders_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessFolders" ADD CONSTRAINT "_AccessFolders_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FolderToProfile" ADD CONSTRAINT "_FolderToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FolderToProfile" ADD CONSTRAINT "_FolderToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersWrite" ADD CONSTRAINT "_foldersWrite_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersWrite" ADD CONSTRAINT "_foldersWrite_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersDelete" ADD CONSTRAINT "_foldersDelete_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersDelete" ADD CONSTRAINT "_foldersDelete_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersUpdate" ADD CONSTRAINT "_foldersUpdate_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersUpdate" ADD CONSTRAINT "_foldersUpdate_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersShare" ADD CONSTRAINT "_foldersShare_A_fkey" FOREIGN KEY ("A") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_foldersShare" ADD CONSTRAINT "_foldersShare_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessFiles" ADD CONSTRAINT "_AccessFiles_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccessFiles" ADD CONSTRAINT "_AccessFiles_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToProfile" ADD CONSTRAINT "_FileToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToProfile" ADD CONSTRAINT "_FileToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesWrite" ADD CONSTRAINT "_filesWrite_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesWrite" ADD CONSTRAINT "_filesWrite_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesDelete" ADD CONSTRAINT "_filesDelete_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesDelete" ADD CONSTRAINT "_filesDelete_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesUpdate" ADD CONSTRAINT "_filesUpdate_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesUpdate" ADD CONSTRAINT "_filesUpdate_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesShare" ADD CONSTRAINT "_filesShare_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_filesShare" ADD CONSTRAINT "_filesShare_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
