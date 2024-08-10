import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
   const port = process.env.PORT || 5555;
  await app.listen(port);
}
bootstrap();
