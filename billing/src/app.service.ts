import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created-event-dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(orderCreatedEvent);
  }
}
