import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequestDto } from './create_order_request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequestDto) {
    console.log(
      'acessando {POST > createOrder} em api-gateway com o body: ',
      createOrderRequest,
    );
    this.appService.createOrder(createOrderRequest);
  }
}
