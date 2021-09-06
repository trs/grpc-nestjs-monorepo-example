import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {

  constructor(private checkoutService: CheckoutService) {}

  @Post('pay')
  async pay(
    @Body('order_id') orderID: string,
    @Body('stripe_card_id') stripeCardID: string
  ) {
    // Verify order
    // Get order total
    // Remove items from inventory
    // Pay for order

    const order = await this.checkoutService.getOrder(orderID);

    // inventoryService.pullInventory()

    // await this.paymentService.requestPayment({
    //   stripeCardID,
    //   total: order.total
    // })
  }
}
