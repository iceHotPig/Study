 
/*
 *分装绑定文档加载完成后的事件处理；
 * @callback fun 页面加载文档完后才调用函数；
 **/
 // 封装一个方法myReady jQuery 内部实现ready的脚本原理;
 document.myReady = function(callback){
    if(document.addEventListener){
        //标准的浏览器
        document.addEventListener('DOMContentLoaded',callback,false);
    }else if(document.attachEvent){
        //IE8 及以下的浏览器；
        document.attachEvent('onreadystatechange',function(){
            //当文档的状态变为：interactive
            if(document.readyState == 'interactive'){
                callback();
            }
        })
    }else{
        //其他特殊情况；
        window.onload = callback;
    }
};