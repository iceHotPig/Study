const net = require('net');

//client :客户端链接服务区端。
let client = net.connect(58888,'127.0.0.1',()=>{
    console.log('连接上服务器端的')
});

client .on('data',(chunk)=>{
    console.log(chunk.toString('utf-8'));
});
client.write("我是客户端发送的数据1");
client.end()