const fs = require('fs');
const path = require('path');

let writeFliePath = path.join(__dirname,'b.txt');

let  writeStream = fs.createWriteStream(writeFliePath,{
    flags:"a"
});

writeStream.on('open',(fd)=>{
    console.log("可写流打开fd：",fd)
});
writeStream.on('close',(fd)=>{
    console.log('可写流关闭fd:',fd)
});

//往可写流里面写入数据
for(let i = 0; i<100;i++){
    writeStream.write('我是一个勤奋的小虫子')
}
writeStream.end('结尾');