import { ReactNode } from "react";

export interface AccordionProps {
  folderName: string,
  childrenFolders: ReactNode[],
  childrenFiles: ReactNode[],
  folderId: string,
}