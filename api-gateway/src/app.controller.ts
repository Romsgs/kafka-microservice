import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequestDto } from './create_order_request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequestDto) {
    console.log('entrou no post (api-gateway)', createOrderRequest);
    this.appService.createOrder(createOrderRequest);
  }
}
