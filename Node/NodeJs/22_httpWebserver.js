/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Renkaixiang
 *
 * Created at     : 2018-09-29 11:07:22 
 */
const http = require('http');
const fs = require('fs');
const path =  require('path');

//创建一个http服务对象
let server =  http.createServer();

//监听客户端请求数据和发送响应报文
server.on('request',(request,response) => {
    // request:请求报文的封装；
    console.log(request.headers);
    console.log(request.url);
    console.log(request.method);

    //设置响应文件的类型和状态码
    let contType = "plain/text"    
    //url：全路径
    let fileName = path.join(__dirname,'dist\\',request.url);
    switch(path.extname(fileName)){
        case '.png':
            contType = 'image/png';
        break;
        case '.jpg':
        case '.jpeg':
            contType = 'image/jpeg';
        break;
        case '.gif':
            contType = 'image/gif';
        break;
        case '.html':
            contType = 'text/html';
        break;
        case '.css':
            contType = 'text/css';
        break;
        default:
            contType = 'text/plain';
        break;
    }  
    response.writeHeader(200,{
        "Content-Type":contType
    }); 
    reader = fs.createReadStream(fileName);
    reader.pipe(response);
    // response:响应的封装
    // response.write('hello');
    // response.end();
});
server.listen(57777,()=>{
    console.log('服务器监听的端口：57777');
});


