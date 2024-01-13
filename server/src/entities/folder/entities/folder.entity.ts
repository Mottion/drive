import { File } from "src/entities/file/entities/file.entity";
import { User } from "src/entities/user/entities/user.entity";

export class Folder {
  id: number;
  ownerId: number;
  parentFolderId: number;
  parentFolder: Folder | null;
  child: Folder[];
  owner: User;
  files: File[];
}
