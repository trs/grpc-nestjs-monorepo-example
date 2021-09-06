/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'order';

export interface GetOrderDetailsRequest {
  id: string;
}

export interface GetOrderDetailsResponse {
  id: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
}

export const ORDER_PACKAGE_NAME = 'order';

export interface OrderServiceClient {
  getOrderDetails(
    request: GetOrderDetailsRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<GetOrderDetailsResponse>;
}

export interface OrderServiceController {
  getOrderDetails(
    request: GetOrderDetailsRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<GetOrderDetailsResponse>;
}

export function OrderServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getOrderDetails'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('OrderService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('OrderService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ORDER_SERVICE_NAME = 'OrderService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
