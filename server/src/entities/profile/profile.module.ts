import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { UserModule } from '../user/user.module';
import { AuthModule } from 'src/services/auth/auth.module';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    PrismaModule,
    UserModule,
    AuthModule
  ],
})
export class ProfileModule {}
