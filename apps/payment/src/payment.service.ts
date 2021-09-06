import { Injectable } from '@nestjs/common';

import type { FindOneResponse } from '~/proto/payment/payment';

@Injectable()
export class PaymentService {
  findOne(heroID: number): FindOneResponse {
    const items: FindOneResponse[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === heroID);
  }
}
