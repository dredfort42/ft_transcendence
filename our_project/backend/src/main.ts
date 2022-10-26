import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const PORT = process.env.PORT_WEB_SERVER || 3000;
	const app = await NestFactory.create(AppModule);

	//swagger
	const config = new DocumentBuilder()
		.setTitle('Документация по BACKEND проекта ft_transcendence')
		.setDescription('Документация REST API')
		.setVersion('0.0.1')
		.addTag('Transcendence мафия 21')
		.build()
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('/api', app, document);
	//swagger

	await app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
}
bootstrap();
