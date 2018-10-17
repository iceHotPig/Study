let add = function(a,b){
    return a + b;
}
console.log(add(2,4));

//箭头函数的写法
let arrowFnAdd = (a,b) => a + b;
console.log(arrowFnAdd(2,4));

let arr = [12,22,23,24,31,4];
arr.sort((a,b) => a - b);
console.log(arr);


// 注意事项
// 函数体内的 this 的对象，就是定义时所在的对象，而不是使用时所在的对象；
// 不可以当做构造函数，也就是不能用new命令否则会抛出一个错误
// 不可以使用 arguments 对象，改对象早函数体里面不存在，如果要用可以用rest参数代替；
// 不可以 使用 yield命令，因此箭头函数不能用作 Generator 函数
// 剪头函数不能用bind绑定this。