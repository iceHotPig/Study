const EventEmitter = require('events');

class myEmitter extends EventEmitter{
    constructor(opt) {
        super(opt);
    }
    init() {
        console.log('init.....');
        //emit :触发事件
        this.emit('init','123');
    }   
    close() {
        console.log('close....');
        this.emit('close');
    }
}

let d =new myEmitter();
//on是监听事件
d.on('init',param => {
    console.log('init 事件触发，参数是',param);
});
d.once('close',()=>{
    console.log('close 事件响应方法....');
});
d.init();//内部触发了init、事件；
d.close();//执行close的方法，内部触发了close事件；