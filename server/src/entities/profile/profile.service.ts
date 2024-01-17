import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Request } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ){}

  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  async findAll(req: Request) {
    const payload = await this.userService.getUserFromHeader(req);
    const user = await this.userService.findByEmail(payload.email);
    if(user && user.profile.name == "ADMIN"){
      const profiles = await this.prisma.profile.findMany()
      return profiles;
    }else{
      throw new HttpException("this user is not an ADMIN", HttpStatus.UNAUTHORIZED);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
