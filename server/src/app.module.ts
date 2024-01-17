import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { join } from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './entities/user/user.module';
import { FolderModule } from './entities/folder/folder.module';
import { FileModule } from './entities/file/file.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { AuthModule } from './services/auth/auth.module';
import { ProfileModule } from './entities/profile/profile.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', ".env.development"]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads'
    }),
    UserModule,
    FolderModule,
    FileModule,
    PrismaModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
