import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

const multerInterceptor = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      const uniquePreffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null,uniquePreffix + "-" + file.originalname)
    }
  }),
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create-user")
  async create(@Body() createUserDto: Prisma.UserCreateInput, @Req() req: Request) {
    return await this.userService.create(createUserDto, req);
  }

  @Post("/upload-image")
  @UseInterceptors(FileInterceptor("file", multerInterceptor))
  async uploadImage(@UploadedFile() file: any, @Req() req: Request){
    return await this.userService.checkFileType(file, req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
