import { Controller } from '@nestjs/common';
import { Metadata } from '@grpc/grpc-js';
import { Observable, of } from 'rxjs';

import { PaymentService } from './payment.service';

import { PaymentServiceControllerMethods } from '~/proto/payment/payment';

import type { FindOneRequest, FindOneResponse, PaymentServiceController } from '~/proto/payment/payment';

@Controller()
@PaymentServiceControllerMethods()
export class PaymentController implements PaymentServiceController {
  constructor(private readonly paymentService: PaymentService) {}

  findOne(data: FindOneRequest, metadata: Metadata): Observable<FindOneResponse> {
    return of(this.paymentService.findOne(data.id));
  }
}
