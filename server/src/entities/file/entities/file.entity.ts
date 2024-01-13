import { Folder } from "src/entities/folder/entities/folder.entity";

export class File {
  id: number;
  folderId: number;
  fileLink: string;
  folder: Folder;
}
