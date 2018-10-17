const fs = require('fs');
const path = require('path');

//读取当前文件的内容，设置的encodeing:是utf-8；
//eadFileSync是同步的方法，当node执行到此行代码的时候，整个程序等待文件读取完成后执行；
//适合读取小文件；
// let fileCnt =  fs.readFileSync(__filename,{
//     encoding:"utf8"
// });
// console.log(fileCnt);


//异步读取的方法
//异步读取文件，主线程继续执行后续的代码，线程池的线程读取文件内容，文件的内容读取完成后，执行回调函数
//仅用于读取小文件；
let indexJsFileName = path.join(__dirname,'tm\\index.js');
let fileCnt1  = fs.readFile(indexJsFileName,{encoding:"utf8"},(err,data)=>{
    console.log('文件读取完毕，执行回调函数')
    if(err){
        console.log('出现异常: ',err);
        return;
    }
    console.log(data);
});
console.log('主线程继续执行。。。。')