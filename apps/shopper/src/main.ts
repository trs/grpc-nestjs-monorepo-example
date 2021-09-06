import { NestFactory } from '@nestjs/core';
import { ShopperModule } from './shopper.module';

async function bootstrap() {
  const app = await NestFactory.create(ShopperModule);
  await app.listen(3000);
}
bootstrap();
