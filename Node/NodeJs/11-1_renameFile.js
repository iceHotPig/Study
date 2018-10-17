const fs = require('fs');
const path = require('path');

let oldDir = path.join(__dirname,'rename.js');
let newDir = path.join(__dirname,'rename000.js');

fs.rename(oldDir,newDir,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('重命名成功');
});