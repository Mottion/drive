import { FileEntityProps } from "./FileEntityProps";

export interface FolderEntityProps{
  id: number,
  parentFolderId: number, 
  parentFolder: FolderEntityProps,
  childFolders: FolderEntityProps[],
  files: FileEntityProps[],
}