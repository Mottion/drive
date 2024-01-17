import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UserService } from '../user/user.service';
import { Request } from 'express';
import { Folder } from '@prisma/client';

@Injectable()
export class FolderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ){}

  create(createFolderDto: CreateFolderDto) {
    return 'This action adds a new folder';
  }

  async getUserFolders(req: Request) {
    const paylod = await this.userService.getUserFromHeader(req);
    const user = await this.userService.findByEmail(paylod.email);
    if(!user){
      throw new HttpException("Unauthorized user!", HttpStatus.UNAUTHORIZED);
    }

    const rootFolders = await this.prisma.folder.findMany({
      where: {
        OR: [
          {
            parentFolder: null,
            ownerId: user.id,
          },
          {
            parentFolder: null,
            usersWithAccess: {
              some: {
                id: user.id,
              }
            },
          },
        ]
      },
    })

    let folders = [];

    for(let folder of rootFolders){
      const allChildFolders = await this.findAllChildFoldersRecursive(folder);
      const folderWithChild = {
        ...folder,
        childFolders: allChildFolders
      }
      folders.push(folderWithChild)
    }

    return folders;
  }

  async findAllChildFoldersRecursive(folder: Folder){
    const childrenFolders = await this.prisma.folder.findMany({
      where: {
        parentFolderId: folder.id,
      },
    });

    let childrenOfDaughterFolders = [];

    for(let folder of childrenFolders){
      const allChildFolders = await this.findAllChildFoldersRecursive(folder);
      const folderWithChild = {
        ...folder,
        childFolders: allChildFolders
      }
      childrenOfDaughterFolders.push(folderWithChild)
    }

    return childrenOfDaughterFolders;
  }

  findOne(id: number) {
    return `This action returns a #${id} folder`;
  }

  update(id: number, updateFolderDto: UpdateFolderDto) {
    return `This action updates a #${id} folder`;
  }

  remove(id: number) {
    return `This action removes a #${id} folder`;
  }
}
