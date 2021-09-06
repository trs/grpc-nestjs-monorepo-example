import { Injectable } from '@nestjs/common';

import { GetOrderDetailsResponse} from '~/proto/order/order';

@Injectable()
export class OrderService {
  getOrder(orderID: string): GetOrderDetailsResponse {
    const orders: GetOrderDetailsResponse[] = [
      { id: '1', items: [{id: '1'}] },
      { id: '2', items: [{id: '2'}] },
    ];
    return orders.find(({ id }) => id === orderID);
  }
}
