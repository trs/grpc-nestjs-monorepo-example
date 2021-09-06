import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, take } from 'rxjs';

import { PaymentServiceClient, PAYMENT_SERVICE_NAME } from '~/proto/payment/payment';
import { OrderServiceClient, ORDER_SERVICE_NAME, GetOrderDetailsResponse } from '~/proto/order/order';

@Injectable()
export class CheckoutService {
  private paymentService: PaymentServiceClient;
  private orderService: OrderServiceClient;

  constructor(
    @Inject('PAYMENT_PACKAGE') private paymentClient: ClientGrpc,
    @Inject('ORDER_PACKAGE') private orderClient: ClientGrpc
  ) {}

  onModuleInit() {
    this.paymentService = this.paymentClient.getService<PaymentServiceClient>(PAYMENT_SERVICE_NAME);
    this.orderService = this.orderClient.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }

  async getOrder(orderID: string): Promise<GetOrderDetailsResponse> {
    const order = await lastValueFrom(this.orderService.getOrderDetails({id: orderID}, null).pipe(take(1)));
    return order;
  }
}
