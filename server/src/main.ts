import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  
  const expressApp = express();
  expressApp.use(
    cors({
      origin: '*', // Substitua pela origem do seu front-end ou "*" para permitir todas as origens
    }),
  );

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  await app.listen(3000);
}
bootstrap();
