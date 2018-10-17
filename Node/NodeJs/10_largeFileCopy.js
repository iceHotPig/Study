const fs = require('fs');//引入fs模块
const path = require('path');//引入path模块

let srcFile = path.join(__dirname,'b.txt');//获取源文件的文件目录
let distFile = path.join(__dirname,'c.txt');//创建新文件的目录

let readStream = fs.createReadStream(srcFile);//创建可读流,读取文件
let writeStream = fs.createWriteStream(distFile);//创建可写流，创建文件

readStream.on('open',()=>{
    console.log('开始读取文件内容');
});
readStream.on('close',()=>{
    console.log('结束读取');
});
readStream.on('data',(trunk)=>{
   if(writeStream.write(trunk) === false) {
       //缓存区满了不能写入时
       //暂停可读流暂停读取数据；
        readStream.pause();
   }
});
writeStream.on('drain',()=>{
    //当可写流数据可以继续写入时，让可读流继续读取数据；
    readStream.resume();
})