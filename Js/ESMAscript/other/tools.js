 /*
  * 返回数值的类型；
  */
      function type(target) {
      var template = {
          "[object Object]":"object - Object",
          "[object Array]":"object - Array",
          "[object Number]":"object - Number",
          "[object Boolean]":"object - Boolean",
          "[object String]":"object - String"
      };
      if(target == null){
          return 'null'
      }
      if(typeof(target)=="object"){
          return template[Object.prototype.toString.call(target)];
      }else{
          return typeof(target);
      }
  }

 /*
  * 数组去重；
  */
  Array.prototype.unique = function () {
      var temp = {},
          arr = [],
          len = this.length;
      for(var i=0; i<len;i++){
          if(!temp[this[i]]){
              temp[this[i]]='abc';
              arr.push(this[i]);
          }
      }
      return arr;
  };

  /*
   * 获取滚动条的位置；
   */
  function getScrollOffset() {
      if(window.pageXOffset){
          return{
              x:window.pageXOffset,
              y:window.pageYOffset
          }
      }else {
          return{
              x:document.body.scrollLeft+document.documentElement.scollLeft,
              y:document.body.scrollTop+document.documentElement.scollTop
          }
      }
  }

  /*
   * 添加时间监听；
   * elem  dom节点；
   * type  事假类型；
   * handler 方法 函数；
   */
  function addEvent(elem,type,handler) {
      if(elem.addEventListener){
          elem.addEventListener(type,handler,false);
      }else if(elem.attachEvent){
          elem['temp' + type + handler]=handler;
          elem[type+handler] = function () {
              elem['temp' + type + handler].call(elem)
          };
          elem.attachEvent('on' + type ,elem[type + handler]);
      }else {
          elem['on' + type] = handler;
      }
  }

 /*
  * 添加时间监听；
  * 解除事件绑定；
  */

  function removeEvent(elem,type,handler) {
      if (elem.removeEventListener){
          elem.addEventListener(type,handler,false);
      }else if(elem.detachEvent){
          elem.detach('on' + type,handler);
      }else {
          elem['on'+type] = null;
      }
  }

  /*
   * 获取当前的样式；
   */
  function getStyle(elem,styleProp) {
      if(elem.currentStyle){
          return elem.currentStyle[styleProp];
      }else{
          return window.getComputedStyle(elem,null)[styleProp];
      }
  }

  /*
  * 获得可视区的宽和高；
  */
  function getViewportOffset() {
      if (window.innerWidth){
          return{
              w:window.innerWidth,
              y:window.innerHeight
          }
      }else {
          if (document.compatMode === 'BackCompat'){
              return{
                  w:document.body.clientWidth,
                  y:document.body.clientHeight
              }
          }else {
              return{
                  w:document.documentElement.clientWidth,
                  y:document.documentElement.clientHeight
              }
          }
      }
  }

 /*
  * 阻止冒泡事件；
  */
 function stopeBubble(event) {
     if(event.stopPropagation){
         event.stopPropagation();
     }else {
         event.cancleBubble = true;
     }
 }

 /*
  * 阻止默认事件；
*/
 function cancelHandler(event){
     if(event.preventDefault){
         event.preventDefault();
     }else{
         event.returnValue = false;
     }
 }


 /*
  * 拖拽；
  */
 function drag(elem) {
     var disX,
         disY;
     addEvent(elem,'mousedown',function(e){
         var event = e ||window.event;
         disX = event.pageX - parseInt(getStyle(elem,'left'));
         disY = event.pageY - parseInt(getStyle(elem,'top'));
         addEvent(document,'mousedmove',mouseMove);
         addEvent(document,'mousedup',Mouseup);
         stopeBubble(event);
         cancelHandler(event);
     });
     function mouseMove(e) {
         var event = e ||window.event;
         elem.style.left = event.slientX - disX +'px';
         elem.style.top = event.slientY - disY +'px';
     }
     function mouseUp() {
         removeEvent(document,'mousemove',mouseMove);
         removeEvent(document,'mouseup',mouseUp);
     }
 }


 /*
  * 异步加载函数；
  */
 function asyncLoaded(url,callback) {
     var script = document.createElement('script');
     script.stype ="text/javascript";
     if (script.readyState){
         script.onreadystatechange = function () {
             if (script.readyState =='complete'||script.readyState =='loaded'){
                 obj[callback]();
                 script.onreadystatechange = null;
             }
         }
     }else {
         script.onload = function () {
             // obj[callback]();
         }
     }
     script.src = url;
     document.head.appendChild(script);
 }

 /*
  * 获取相对于文档的鼠标的位置；
  */
 function getMousePos(event) {
     var e = event || window.event;
     var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
     var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
     var x = e.pageX || e.clientX + scrollX;
     var y = e.pageY || e.clientY + scrollY;
     return { 'x': x, 'y': y };
 }