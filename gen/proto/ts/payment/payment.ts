/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'payment';

export interface FindOneRequest {
  id: number;
}

export interface FindOneResponse {
  id: number;
  name: string;
}

export const PAYMENT_PACKAGE_NAME = 'payment';

export interface PaymentServiceClient {
  findOne(
    request: FindOneRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<FindOneResponse>;
}

export interface PaymentServiceController {
  findOne(
    request: FindOneRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<FindOneResponse>;
}

export function PaymentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['findOne'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('PaymentService', method)(
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
      GrpcStreamMethod('PaymentService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PAYMENT_SERVICE_NAME = 'PaymentService';

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
