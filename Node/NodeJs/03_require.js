

//path 模块 提供了一些工具函数，用于处理文件的路径
//第一种：引入内置模块
const  path = require('path');//const ：是定义一个常量
//const声明的是一个引用类型，那么这个变量的指向的内存地址不变；
var p = path.join(__dirname,__filename)// 是把多个路径合并成一个路径；
console.log(p);


//第二种：引入文件模块
//文件可以加后缀也可以不加后缀，但是建议加后缀
//如果文件不加后缀，那么node会尝试着加 .js 、.json 、 .node 的后缀
//相对路径和绝对路径都是可以的；
const math = require('./02_math.js');
console.log(math.add(9,8));


//第三种：引入文件夹模块；尽量少用；
//1,     首先到根目录的package.json文件去找main的配置节点；

const i = require('./tm/index.js');
i.show();

//第四种：自定义模块
const strW =  require('string-width');
let num = strW('我叫任开祥');
console.log(num);