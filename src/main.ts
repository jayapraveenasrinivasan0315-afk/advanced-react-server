import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );

  // ✅ Cookie parser (required for refresh tokens)
  app.use(cookieParser());

  // ✅ Static files (if you use uploads / assets)
  app.use('/static', express.static(join(process.cwd(), 'static')));

  // ✅ CORS CONFIG (FIXED)
  app.enableCors({
    origin: (origin, callback) => {
      // Allow localhost:80 (local dev) and nginx container (Docker)
      const allowedOrigins = ['http://localhost:80', 'http://localhost', 'http://advanced-react'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'), false);
      }
    },
    credentials: true,               // 👈 REQUIRED for cookies
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = process.env.PORT || 8000;
  await app.listen(port,'0.0.0.0');

  console.log(`🚀 Application is running on: http://0.0.0.0:${port}`);
}

bootstrap();
