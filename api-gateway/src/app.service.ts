import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequestDto } from './create_order_request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  async createOrder({ userId, price }: CreateOrderRequestDto) {
    console.log(
      `serviço acionado. emitindo nova mensagem para o broker com orderId ${'123'}, userId: ${userId} e price: ${price}`,
    );
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
