import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // Fuerza que se validen los DTO
  let number = 3000;
  const port = process.env.PORT ?? number;
  app.useStaticAssets(join(__dirname, '../public'));
  await app.listen(port);

  console.log(`Servidor corriendo en el puerto http://localhost:${port} 🚀`);
}
bootstrap();