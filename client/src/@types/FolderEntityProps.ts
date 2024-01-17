import { FileEntityProps } from "./FileEntityProps";

export interface FolderEntityProps{
  id: number,
  folderName: string,
  parentFolderId: number, 
  parentFolder: FolderEntityProps,
  childFolders: FolderEntityProps[],
  files: FileEntityProps[],
}