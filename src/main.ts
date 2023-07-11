import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.server;
  const port = serverConfig.port;
  
  await app.listen(port); // 3000번 포트에서 실행
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
