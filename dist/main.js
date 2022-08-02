"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var log4js = require('log4js');
var logger = log4js.getLogger();
const common_1 = require("@nestjs/common");
require("reflect-metadata");
const socket_controllers_1 = require("socket-controllers");
const FHMessageControllerv1_1 = require("./mycontrollers/FHMessageControllerv1");
(0, socket_controllers_1.createSocketServer)(3001, {
    controllers: [FHMessageControllerv1_1.FHMessageController]
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    logger.info('weishuaiok');
    app.enableCors();
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS,UPGRADE,CONNECT,TRACE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(3009);
}
bootstrap();
//# sourceMappingURL=main.js.map