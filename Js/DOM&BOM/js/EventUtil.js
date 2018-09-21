//事件封装
(function(window){
    var EventUtil = {
        //第一个：封装绑定的兼容处理
        // 1给谁绑定 ，2事件类型 ，3绑定事件处理程序 4，捕获还是冒泡
        addEvent:function(element, type, handler, isCapture){
            if(element.addEventListener){
                // 标准的绑定事件
                // 处理第四个参数，保证其为布尔值;
                isCapture = isCapture?true:false;
                element.addEventListener(type, handler, isCapture);
            }else if(element.attachEvent){
                element.attachEvent('on'+type,function(){
                    //window.event
                    return handler.call(element,window.event)//函数调用模式，this==window
                    //所有的事件处理中 this == event.target||event.srcElement事件源对象)
                });
            }
        },//end for addEvent
        //获取事件对象，兼容处理
        getEvent:function(e){
            return e || window.event;
        },
        //获取事件源对象
        getTarget:function(e){  
            return e.target || e.srcElement;
        },
        //阻止事件冒泡
        stopPropagation:function(e){
            if(e.stopPropagation){
                e.stopPropagation();    
            }else{
                e.cancelBubble = true;
            }
        },
        //默认行为
        preventDefault:function(){
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false; 
            }
        }
    }
    //把上面定义的对象赋值给window属性；
    window.EventUtil = EventUtil;
})(window || {});


//1给谁绑定 ，2事件类型 ，3绑定事件处理程序 4，捕获还是冒泡
// EventUtil.addEvent(elem,"click",fun,false)