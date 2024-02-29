import {
  BadGatewayException,
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('student')
  async getStudentById(@Query('id', ParseIntPipe) id: number) {
    try {
      const res = await this.appService.getStudentById(id);

      return res;
    } catch (e) {
      console.error(e instanceof Error ? e.message : e);

      throw new BadGatewayException({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e instanceof Error ? e.message : e,
      });
    }
  }
}
