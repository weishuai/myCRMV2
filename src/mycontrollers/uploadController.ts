import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
@Controller('/upload')
export class uploadController {
  @Post('/doAdd')
  @UseInterceptors(FileInterceptor('pic')) //pic对应 <input type="file" name="pic" id="">
  doAdd(@Body() body, @UploadedFile() file) {
    // console.log(body);
    // console.log(file);
    const cws = createWriteStream(
      join(
        __dirname,
        '../../public/upload/',
        `${Date.now()}---${file.originalname}`,
      ),
    );
    cws.write(file.buffer);
    return '上传图片成功';
  }
}
