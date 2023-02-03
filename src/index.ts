import WebSocket from 'ws';
import TcpSocket from 'net';


interface IClient{
  id : 0,
  ipAddress : string,
  connectedAt : Date,
}

type MessageType = 'data' | 'end' | 'error' | 'timeout' 

interface ISocketServer{
  createServer : 'ws' | 'socket'
  clients : Array<IClient>,
}