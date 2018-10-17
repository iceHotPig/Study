const  http = require('http');

//当发生了request请求的时候，自动调用回调函数；
http.createServer((req,res)=>{
    // req:
    req.on('data',() => {
        
    });
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    res.write('123')
    res.end();
}).listen(57778,()=>{
    console.log('服务器端口监听端口57777成功');
});