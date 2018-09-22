/**
 * Created by Administrator on 2018/4/16. * @author rkx
 */
/*
 * 查看元素的几何尺寸；
 * domElem.getBoundingClientRect();
 * 可以获得元素的 top bottom left right  height width;
 * 是静态的写照，不能实时的发生改变；
 */

/*
 * 查看元素的几何尺寸；
 * dom.offsetWidth 查看元素的宽
 * dom.offsetHeight 查看元素的高
 */


/*
 * 查看元素的位置；这里求的是相对于父级的位置；父级必须是有position定位，如果父级没有定位，这时求得是相对于浏览器的位置
 * dom.offsetLeft 查看相对于父级额横向的位置
 * dom.offsetTop 查看相对于父级额竖向的位置
 */

/*
 * window上的三个方法
 *scoll(X,Y)和scollTo(X,Y)在这两个方法是一样的；这是滚动到的位置；
 * scollBy(x,y);在之前的数据上累加滚动的距离
 */

// 脚本化css


// style属性   无论是读的还是写的都是行间样式；

function addEvent(elem,type,handler) {
    if(elem.addEventListener){
        elem.addEventListener(type,handler,false)
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
var span = document.getElementsByTagName('span')[0];
function test() {
    alert(1);
};
addEvent(span,'click',test);


function asyncLoaded(url,callback) {
    var script = document.createElement('script');
    script.stype ="text/javascript";
    if (script.readyState){
        script.onreadystatechange = function () {
            if (script.readyState =='complete'||script.readyState ==200){
                obj[callback]();
                script.onreadystatechange = null;
            }
        }
    }else {
        script.onload = function () {
//                    obj[callback]();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}
asyncLoaded('https://angluar2-2a4a7.firebaseio.com/',show);
function show(data) {
    console.log(data);
}



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


function getStyle(obj,styleProp) {
    if(obj.currentStyle){
        return obj.currentStyle[styleProp];
    }else{
        return window.getComputedStyle(obj,null)[styleProp];
    }
}




// oncontextmenu   右键出菜单事件

// 事件原对象