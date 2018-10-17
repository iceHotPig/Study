const net = require('net');

//创建服务端对象；
let server = net.createServer();

server.on('connection',(clientSocket) => {
    //clientScokt 就是指向客户端的一个对象，可以通过他给客户端发送数据。可写流，可以写入数据，也是一个解读流。可以读取数据。

    clientSocket.on('data',(chunk)=>{
        console.log(chunk.toString('utf-8'));
    })
    //向客户端写入数据。
    clientSocket.write('你好啊,我是来自服务器端的数据');
    clientSocket.end('结束链接');
});
//开始监听端口
server.listen(58888);