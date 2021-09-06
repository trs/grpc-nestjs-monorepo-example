import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CheckoutController } from './checkout/checkout.controller';

import paymentGRPCOptions from '~/payment/src/payment.grpc';
import orderGRPCOptions from '~/order/src/order.grpc';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_PACKAGE',
        transport: Transport.GRPC,
        options: paymentGRPCOptions
      },
      {
        name: 'ORDER_PACKAGE',
        transport: Transport.GRPC,
        options: orderGRPCOptions
      },
    ]),
  ],
  controllers: [CheckoutController],
  providers: [],
})
export class ShopperModule {}
