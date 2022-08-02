import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
///import logger from "morgan";
var log4js = require('log4js');
var logger = log4js.getLogger();

import { ValidationPipe } from '@nestjs/common';

// Socket
///import "es6-shim"; 
import "reflect-metadata"; 
import {createSocketServer} from "socket-controllers";
import {FHMessageController} from "./mycontrollers/FHMessageControllerv1";
 
createSocketServer(3001, {
    controllers: [FHMessageController]
});


async function bootstrap() {
  ///const app = await NestFactory.create(AppModule);
  //await app.listen(3009);
  const app = await NestFactory.create(AppModule, { cors: true });
  //开启一个全局验证管道
  app.useGlobalPipes(new ValidationPipe()) 
  //logger.('weishuaiok');
  logger.info('weishuaiok');
  // DOESN'T WORK
  app.enableCors();
  // DOESN'T WORK
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,PUT,POST,DELETE,PATCH,OPTIONS,UPGRADE,CONNECT,TRACE',
    );
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(3009);
}
bootstrap();
