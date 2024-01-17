import { Module } from '@nestjs/common';
import { FolderService } from './folder.service';
import { FolderController } from './folder.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { PrismaModule } from 'src/services/prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [FolderController],
  providers: [
    FolderService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    PrismaModule,
    UserModule,
  ],
})
export class FolderModule {}
