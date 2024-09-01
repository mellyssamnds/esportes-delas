import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);

  const config = new DocumentBuilder()
    .setTitle('Esportes dELAS')
    .setDescription(
      'Projeto Final da Imersão JavaScript {reprograma} que consiste em um sistema de empoderamento feminino na prática de atividades físicas em diferentes modalidades, promovendo um ambiente seguro e encorajador.',
    )
    .setVersion('1.0')
    .addTag('athletes')
    .addTag('trainings')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('home', app, document);

  await app.listen(3000);
}
bootstrap();
