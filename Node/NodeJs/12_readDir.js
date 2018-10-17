const fs = require('fs');
const path = require('path');

//异步。
//读取路径，返回路径下面的所有的文件和文件夹名字；
fs.readdir(__dirname,(err,files)=>{
    // console.log(files);
    files.forEach((item,index)=>{
        fs.stat(path.join(__dirname,item),(err,stat)=>{
            // console.log(stat.isFile);
            stat.isFile() ? console.log("file:",item) : console.log("dir:",item)
        })
    });
})