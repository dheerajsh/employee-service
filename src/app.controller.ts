import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmployee(@Query('fromDate') fromDate: string,
  @Query('toDate') toDate: string): string {

    return this.appService.getEmployee(fromDate, toDate);
  }
}
