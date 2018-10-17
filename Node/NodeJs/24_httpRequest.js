const http = require('http');

//发送一个get请求
// http.get('http://aicoder.com',(req)=>{
//     req.on('data',(trunk)=>{
//         console.log(trunk.toString('utf8'));
//     });
// });

//post 通过的httpReques对象发送请求；
let request = http.request({
    protocol: 'http:',//请求的协议
    host:'www.baidu.com',//请求的host
    port: 80,//端口
    method:'POST',//get 请求
    timeout: 2000,//超时时间
    path:'/' //请求路径
},(res)=>{
    res.on('data',(trunk)=>{
        console.log(trunk.toString('utf8'));
    });
});

request.end();//这是真正的发送请求；