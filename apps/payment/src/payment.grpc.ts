import { join } from "path";

export default {
  package: 'payment',
  protoPath: join(__dirname, '../../../assets/proto/payment.proto'),
  url: 'localhost:5002'
}
