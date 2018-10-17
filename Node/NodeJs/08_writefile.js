const fs = require('fs');
const path = require('path');

let  aPathFile = path.join(__dirname,'a.txt');
//简单的写入 （异步写入到文件中）
// fs.writeFile(aPathFile,"我在学习nodejs，加油",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('正常写入')
// });

//同步的写入；
fs.writeFileSync(aPathFile,'hello2',{
    flag:"a"
});