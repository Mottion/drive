import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from 'src/services/auth/constants';
const fs = require('fs');

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ){}

  async getUserFromHeader(request: Request){
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const payload = await this.jwtService.verifyAsync(
      token,
      {
        secret: jwtConstants.secret
      }
    );
    return payload;
  }

  async create(createUserDto: Prisma.UserCreateInput, req: Request): Promise<User> {
    const paylod = await this.getUserFromHeader(req);
    const user = await this.findByEmail(paylod.email);
    
    if(user.profile.name != "ADMIN"){
      throw new HttpException("this user is not an ADMIN", HttpStatus.UNAUTHORIZED);
    }

    const newUser = this.prisma.user.create({data: createUserDto});
    return newUser;
  }

  async checkFileType(file: any, req: Request) {
    console.log("🚀 ~ UserService ~ checkFileType ~ file:", file)
    if(file.mimetype != "image/jpeg" && file.mimetype != "image/png"){
      fs.unlink(file.path, (error) => {
        console.log(error);
      })
    }else{
      const  baseUrl = req.protocol + '://' + req.get('host');
      return baseUrl + "/" + file.path;
    }
  }

  findByEmail(email: string){
    const user = this.prisma.user.findUnique({
      where: {
        email: email
      },
      include: {
        profile: true
      }
    });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
