import 'reflect-metadata';
import 'module-alias/register';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';
import config from '@src/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', { exclude: [config.adminJs.rootPath] });
  await app.listen(config.port);
}

bootstrap();
