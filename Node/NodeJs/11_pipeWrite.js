const fs = require('fs');//引入fs模块
const path = require('path');//引入path模块

let srcFile = path.join(__dirname,'b.txt');//获取源文件的文件目录
let distFile = path.join(__dirname,'d.txt');//创建新文件的目录

let readStream = fs.createReadStream(srcFile);//创建可读流,读取文件
let writeStream = fs.createWriteStream(distFile);//创建可写流，创建文件

readStream.pipe(writeStream);