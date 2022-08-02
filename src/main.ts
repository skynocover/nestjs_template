import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // validator pipe

// 使用官方的config
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); //whitelist will strip unnecessary properties
  app.setGlobalPrefix('api'); //global prefix

  setupSwagger(app);

  // 使用官方設定檔
  const configService = app.get(ConfigService); // 取得 ConfigService
  const port = configService.get('PORT');

  console.log('Listen on port: ' + port);
  await app.listen(port);
}

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
}

bootstrap();
