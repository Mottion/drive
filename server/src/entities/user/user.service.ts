import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  create(createUserDto: CreateUserDto): Promise<User> {
    return ;
  }

  findAll() {
    return `This action returns all user`;
  }

  findByEmail(email: string){
    const user = this.prisma.user.findUnique({
      where: {
        email: email
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
