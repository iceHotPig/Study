const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,'package-lock.json')

//创建一个可读取的流
let stream = fs.createReadStream(fileName,{encoding:"utf-8"});
//当流的管道建立并打开时触发open事件；
stream.on('open',(fd)=>{
        console.log('管道建立并打开fd：',fd);
});  

//当数据流过来，直接触发data事件
let i = 0;
stream.on('data',(trunk)=>{
    console.log('编号%d',i,trunk);
    i++
});
//数据读取完成触发end事件
stream.on('end',()=>{
    console.log('数据读取完成！');
});