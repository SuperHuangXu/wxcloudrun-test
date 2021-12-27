import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.listen(port, () => {
    console.log('服务启动成功，端口：', port);
  });
}
bootstrap();
