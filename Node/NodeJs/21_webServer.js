const net = require('net');

//创建服务端对象；
let server = net.createServer();

server.on('connection',(clientSocket) => {
    //clientScokt 就是指向客户端的一个对象，可以通过他给客户端发送数据。可写流，可以写入数据，也是一个解读流。可以读取数据。
    //读取数据
    clientSocket.on('data',(chunk)=>{
        console.log(chunk.toString('utf8'));
    })
    //向客户端写入数据。
    clientSocket.write(`HTTP/1.1 200 OK
Server: Apache
Conent-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>函数的参数</title>
</head>
<body>
   <h1>这是来自网络的数据</h1>
</body>
</html>
`);
    clientSocket.end();
});
//开始监听端口
server.listen(58888,() => {
    console.log("服务器开始监听58888 端口");
});