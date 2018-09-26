console.log("hi my first node demo");

setInterval(()=>{
    console.log(new Date());
},1000);

console.error('eee')

var  t=1;
console.time('123');
for(var i = 0; i<100000;i++){
    t+=1;
}
console.timeEnd('123');