import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/services/auth/auth.guard';

@Module({
  controllers: [UserController],
  providers: [
    UserService, 
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [PrismaModule],
  exports: [UserService]
})
export class UserModule {}
