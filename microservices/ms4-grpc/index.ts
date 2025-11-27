import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './gen/service';
import { StatusServiceHandlers } from './gen/mawasili/StatusService';

const PROTO_PATH = __dirname + '/protos/service.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const server = new grpc.Server();

const statusServiceHandlers: StatusServiceHandlers = {
  GetStatus: (call, callback) => {
    callback(null, { message: 'MS4 gRPC service is running!' });
  },
};

server.addService(proto.mawasili.StatusService.service, statusServiceHandlers);

server.bindAsync('0.0.0.0:4002', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`🚀 MS4 gRPC Server running at http://0.0.0.0:${port}`);
  server.start();
});
