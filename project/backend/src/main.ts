import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";
import * as session from 'express-session';
import * as passport from 'passport';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Сайт')
    .setDescription('Пинбол')
    .setVersion('1.0.0')
    .addTag('pinball')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.use(
    session({ resave: false, saveUninitialized: false, secret: '!school21_ft_transcendence' }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
