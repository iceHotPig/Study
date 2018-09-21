(function(w){
    var  Rui =w.Rui ? w.Rui : {}//定义Rui框架的根
    Rui.dialog = function(selector){
        //先判断之前有没有创建过对象、
        if(Rui.dialog.cache[selector]){
            return Rui.dialog.cache[selector];
        }
        //接受用户传的选择器
        //要有一个show方法，弹出对话框
        //关闭的方法；
        //动态解析用户输入的内容；
        var dialogDiv = document.querySelector(selector);
        if(!dialogDiv){
            return null;
        }
        //拿到用户的写的标题；
        var title = dialogDiv.getAttribute('title');
        var dialogCover = document.createElement('div');

        dialogCover.className = "dialog-wrap" ;
        document.body.appendChild(dialogCover);

        strHTML  = "";
        strHTML += '<div class="dialog" id="dialog">';
        strHTML +=      '<div class="dialog-header">';
        strHTML +=          '<h3>'+title+'</h3>';
        strHTML +=          '<span class="btn-close" id="closeBtn">X</span>';
        strHTML +=      '</div>';
        strHTML +=      '<div class="dialog-body">';
        strHTML +=          dialogDiv.innerHTML;
        strHTML +=      '</div>';
        strHTML += '</div>';   
        dialogDiv.innerHTML = strHTML;

        var dialog = {
            dialogDiv:dialogDiv,//dialog div
            title:title,//返回用户设置的标题
            dialogCover:dialogCover,
            show:function(){
                //弹出层
                //第一个显示遮罩层，第二显示对话框，第三给关闭按钮添加事件；
                this.dialogDiv.style.display = 'block';
                this.dialogCover.style.display = 'block';
                var _slef = this;
                var closeBtn = document.getElementById('closeBtn');
                closeBtn.onclick = function(){
                    _slef.close();
                }
            },
            close:function(){
                this.dialogDiv.style.display = 'none';
                this.dialogCover.style.display = 'none';
                closeBtn.onclick = null;
            }
        }
        Rui.dialog.cache[selector] = dialog;
        return dialog;
    }
    Rui.dialog.cache ={};
    w.Rui = Rui;//占用Rui的群居对象
})(window||{});

(function(w){
    var Rui = w.Rui ? w.Rui : {}    
    /**
     * @description 进行向下展开的函数
     * @param {HTMLElement} element //进行动画的元素
     * @param {number} duration //动画持续的时间
     */
    Rui.slideDown = function(element,duration){
        var start = Date.now();//开始动画的时间；
        element.style.display = "block";
        var originH = element.clientHeight;
        element.style.height = "0px";
        var timer = setInterval(function(){
            var now = Date.now();
            element.style.height = (now-start)*originH/duration + "px";
            if(now-start>=duration){
                element.style.height = originH + "px";
                clearInterval(timer);
            }
        },1000/60);
    },
    /**
     * @description 进行向上展开的函数
     * @param {HTMLElement} element //进行动画的元素
     * @param {number} duration //动画持续的时间
     */
    Rui.slideUp =function(element,duration){
        var start = Date.now();
        var originH = element.clientHeight;
        var timer = setInterval(function(){
            var now = Date.now();
            var minusH = (now-start)*originH/duration;
            element.style.height =(originH - minusH) + "px";
            if(originH <= minusH){
                element.style.height = originH + "px";
                element.style.display = 'none';
                clearInterval(timer);
            }
        },1000/60);
    }
    w.Rui = Rui;
})(window||{});