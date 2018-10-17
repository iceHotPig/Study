//引入path模块
const path = require("path");
//const 用于声明变量，值不能改变；

//第一种情况：简单类型。 string number  boolean 等这些简单类型的值是不能改变的
const str = "123";

//第二种情况：复杂类型，引用类型的引用的地址是不能改变。



//path 模块获取路径中的额文件名
//语法： path.basename(path[ ,ext])
// path : 是文件完整的路径<string>
// ext:可以选的文件的扩展名<string>

let strpath1 = 'E:\JSONSERVER\package.json';
let strpath2 = 'E:\study\vue\Vuex\vuex-playlist\index.html';

console.log(path.basename(strpath1));
console.log(path.basename(strpath2));
console.log(path.basename('E:\JSONSERVER\package.json','.json'));

console.log(path.delimiter);//window 系统下的分隔符；
console.log(path.posix.delimiter);//liunix 系统下的分割符；
