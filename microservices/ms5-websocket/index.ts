import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 4003 });

wss.on('connection', function connection(ws) {
  console.log('MS5 WebSocket client connected');
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(`Echo from MS5: ${data}`);
  });

  ws.send('Welcome to MS5 WebSocket service!');
});

console.log('🚀 MS5 WebSocket Server is running on port 4003');
