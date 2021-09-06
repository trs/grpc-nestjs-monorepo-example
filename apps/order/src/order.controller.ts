import { Controller } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';
import { Observable, of } from 'rxjs';

import { OrderService } from './order.service';

import { OrderServiceControllerMethods } from '~/proto/order/order';

import type { GetOrderDetailsRequest, GetOrderDetailsResponse, OrderServiceController } from '~/proto/order/order';

@Controller()
@OrderServiceControllerMethods()
export class OrderController implements OrderServiceController {
  constructor(private readonly orderService: OrderService) {}

  getOrderDetails(data: GetOrderDetailsRequest, metadata: Metadata): Observable<GetOrderDetailsResponse> {
    return of(this.orderService.getOrder(data.id));
  }
}
