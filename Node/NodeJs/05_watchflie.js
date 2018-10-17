const fs = require('fs');

// 第一种写法
//启动监听的文件
// let watcher = fs.watch(__dirname);
// // console.log(watcher);

// //简体改变的事件
// watcher.on('change',(eventType,fileName)=>{
//     console.log(eventType);
//     console.log(fileName);
// });


// 第二种写法
let watcher = fs.watch(__dirname,(eventType,fileName)=>{
    console.log("callback :" ,eventType,fileName);
});


//关闭监听
setTimeout(()=>{
    //实际：关闭监听
    watcher.close();
},100000);
