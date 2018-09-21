第一节 ：DOM 和 BOM的概念
    BOM
        是浏览器对象模型。是Brower Object Mode 的缩写。
        它提供了一整套的从浏览器相关的前端页面的API
    DOM 
        就是文档对象模型，是Document  Object Mode的缩写。是HTML文档页面进行编程控制
        的一系列的接口API
        它提供了对文档的结构化的表述。并定义了一种方式可以从程序中对该结构进行访问，从而
        改变文档的结构，样式和内容，DOM将文档解析为一个与节点和对象（包含属性和方法的对象）
        组成的结构结合，简言之，它将web页面和脚本或者程序语言链接起来。

    docement 对象
        document 对象对应了整个文档。整个文档相关的操作和编程的API都是通过document对象
        来实现的。
        document常用的属性。
            URL:获取文档的URL地址。只读
            title：获取当前文档的title的文字内容，可以写入更改。
        时钟补充：
            setInterval:
                用法：
                    var intervalID = window.setInterval(code,delay);
                    var intervalD = window.setInterval(function,,delay[param1,param2]);//ie不支持额外的参数
                此方法是重复的调用一个函数或是执行一个代码段，在每一次调用之间有固定的时间延迟，返回一个intervalD。delay
                是延迟的毫秒数。
            超时执行某个函数或者代码段。setTimeOut
                用法：
                   var sintervalD = window.setTimeOut(fun,delay);
                    延迟delay毫秒数后执行函数 fun
            清除时钟：clearInterval()
                用法：
                  window.clearInteral(intervalID);
                  intervalID是你想要取消的定时器的ID，这个ID是整数，是有setInterval（）返回的

    访问Dom树上的节点
        getElementById(id);
            参数：id，是标签的唯一的id属性。区分大小写；
            返回Element对象
            var elem = document.getElementById("para1")

        getElementsByTagName(tagname);
            根据标签名字获取的同名标签的对象
            参数：标签名，如果是*则返回所有标签；
            返回HTMLCollection此对象是动态集合，如果标签发生变化自动更新集合；
            
        getElementsByName(name);
            根据name字获取elem的对象
            参数：标签的name属性名；
            返回NodeList集合，集合不随着标签的变化而变化；

        querySelector(selectors);
            根据css的选择器进行选取元素（返回满足条件的第一个元素）
            参数：是一个字符串，包含一个或是多个的css选择器，多个则用逗号分开；
            返回elem对象；
        
         querySelectorAll(selectors);
            根据css的选择器进行选取元素（满足条件的所有元素）
            参数：是一个字符串，包含一个或是多个的css选择器，多个则用逗号分开；
              返回NodeList集合
        ***除了getElementById(id);外，其他方法可以用于任何一个节点的后代元素

    Element 元素对象（接口）详解；
        Element对象：
            元素，是所有标签元素的基础对象，封装了所有标签元素的公共方法和属性；
            
            常用的属性：
                Element.attributes 获取所有属性key-vaule集合；
                Element.className 获取类名
                Element.id获取id
                Element.innerHTML 获取元素内部包裹的html标签字符串
                Element.tagName (只读)获取元素的标签名字符串
            常用的方法：
                Element.getAttribute(attName)  返回属性的字符串
                Element.setAttribute(attName)  设置属性
                Element.hasAttribute(attName)  检测属性是否存在
                Element.removeAttribute(attName) 从指定的元素中删除一个属性

    了解Node对象的接口
        Node是节点的抽象接口，是对节点API的封装；
        节点和元素的区别；
            元素只能是标签，比如 li p span 等；
            节点：既包括标签同时也可以是属性节点，文本节点，文档类型节点，注释节点等。
            元素类型Element继承自Node接口；
        常用的属性
            子节点node.childNodes,实时更新
            Node.firstChild:第一个节点 
            Node.lastChild:最后一个节点 
            Node.nextSiblings :返回与该节点同级的下一个节点。如果没有返回null。
            Node.nodeType:节点的类型；
            Node.parentNode: 父节点；
            Node.textContent:
            Node.previousSiblings:
        常用的方法：
            Node.appendChild():添加子节点
            Node.cloneNode():克隆节点
            Node.removeChild():删除子节点
            Node.replaceChild():删除子节点

第三节 事件
    事件概念
        当某件事发生时会触发对应的事情的发生。
        一个事件包括 ： 事件源 事件名 事件响应的行为 这三个基本的要素；
    事件绑定
        元素绑定事件（DOM0级）
            第一种:直接在HTML标签中添加事件属性。
                例如：<p onclick = 'alert(123)'>点击我</p>、
                不推荐使用
            第二种：通过js代码给元素添加事件属性
               <p id = 'p'>我是一段标签</p>
               <script>
                   var p = document.getElementById('p');
                   p.onclick = function(){
                       alert(1234);
                   }
                   //解除绑定事件
                   //p.onclick = null;
               </script>
               事件的三要素：事件源  事件响应的方法 事件的类型
        元素绑定事件（DOM2级）
            addEventListener注册事件；
                语法：target.addEventListener(type,listener[,useCapture]);
                参数：
                    type： 事件的类型。注意在在DOM0级中所有的事件都包含on，比如onclick，但是在此方法中不要加on前缀
                    listener：事件处理的方法；
                    useCapture：默认值是false，可以省略。意思是是否在捕获阶段触发响应事件。ture表示是，false表示是在
                    冒泡阶段触发。
                优点：可以控制是在捕获时时冒泡阶段触发事件响应方法
                    可以注册多个方法不会覆盖。
        解除绑定事件（DOM2级）
            removeEventListener
                参数同addEventlistener(),注意一点就是：listener必须是跟添加事件响应方法相同的函数！！
                <div id="div">我是div</div>
                <script>
                    var div = document.getElementById('div');
                    var  listener = function(event){
                        <!--  do someting here -->
                    }
                    div.addEventListener('click',listener,false);
                    div.removeEventListener('click',listener,false);
                </script>
        IE8事件的绑定和解绑
            IE8包括之前的浏览器版本都没有实现addEventListenter方法，但是实现了自己的一套方法：attachEvent()和DetachEvent()
            方法。
            IE8包括之前的版本只支持冒泡，所以注册事件都在只能在冒泡阶段触发。
            attachEvent()和detachEvent()的参数都一样和addEventListener()的参数也是一样的
                第一个参数：eventNameWithOn : on +事件类型字符串，如：onclick；
                第二个参数事件响应的方法：类型函数，可以是匿名函数。
        夸浏览器事件绑定兼容
            <script>
                if(el.addEventListener){
                    el.addEventListener('click',listener,false);
                }else if(el.attachevent){
                    el.attachEvent('onclick',listener);
                }
            </script>
                
    事件流
        事件分为捕获阶段和冒泡阶段。捕获阶段就是事件信息从顶层向下层传递的过程，而冒泡事件反应处理从底层向上层反馈的过程
        js可以通过addEventListener来实现捕获阶段和冒泡阶段的事件响应方法的注册。
        直接对DOM、对象上设置的事件属性和标签中直接编写标签属性的方式都是在冒泡阶段执行。ie9之后才支持事件捕获，之前只支持
        冒泡事件。
    事件对象
        DOM事件触发的时候，会产生一个事件对象event，事件对象中分装了事件相关的信息：事件源对象，事件类型，事件处理操作的方法，
        在某些鼠标事件中，还包括鼠标的相关位置信息，鼠标按键信息，在键盘事件中好包括按键的信息。

        常用的属性
            Event.target 事件源对象 IE6-IE8 是Event.srcElement
            Event.type 事件类型
            Event.cancelBubble 是否取消事件冒泡。IE下使用；
            Event.returnValue 布尔类型，false 则是阻止默认行为
        
        常用的方法：
            阻止默认行为：Event.preventDefault();比如链接的跳转
                IE中不能用，在事件响应方法中returnValue = false。
            阻止冒泡事件：Event.stopPropagation();
                IE中不能用,用。cancelBubble = true 

        阻止事件冒泡和默认行为
            window.event.cancelBubble = ture //IE;
            e.stopPropagation();//非IE可以阻止事件冒泡和捕获；
            阻止默认行为（阻止默认行为不能阻止事件冒泡）；
            window.event.returnValue = false;//IE;
            e.preventDefault();//非IE；
            综合写法
            <script>
                //阻止冒泡事件
                function myfn(e){
                    window.event ? window.evnet.cancelBubble : e.stopPropagation();
                }
                //阻止默认事件
                function myfun(){
                    window.event ? window.event.returnValue = false : stop.Default();
                }
            </script>
        
        事件处理程序的返回值
            在使用事件属性处理程序的返回值有时候非常有用，
            常用点：
                在键盘的onkeypress事件中，如果事件处理程序返回false，则表示过滤某个按键
                在表单的onclick事件中，return false 则表示阻止默认的提交操作 ，当然也可以用event.returnValue = false;
                window 对象的onbeforeunload 事件中如果返回字符串，表示浏览窗口在跳转前，会弹出确认消息的对话框，返回的字符串会显示在对话框上


    事件类型
        文档的加载和准备就绪事件
            onload 事件：
                在window对象或者img对象上进行触发，当页面所有的内容都加载完成后（包括图片下载完成）则会触发window的onload事件。图片加载完成也会触发onload事件。
                其实在图片和异步的脚本加载完成之前，只要dom文档记载完成后，就可以执行js的相关操作，没有不必要等待图片加载完成
                优化
                    DOMContentLoaded事件是DOM文档加载完成后就会触发的事件（ff最先引入，IE9开始支持）目前已经纳入了标准的HTML5
                    IE的早期版本不支持DOMContentLoaded事件，但是可以监听document的状态变化来实现。document的onreadystatechange事件中，document的readystate为complete时代表文档记载完成 
                    Jquery内部的document.ready就是如此实现的；
            onunload事件和onload事件相反:网页卸载完后；

            onbeforeunload事件：当网页刷新或者页面关闭之前；
        窗口的其他事件：
            onresize 事件
                当窗口的大小发生改变的时候出发；
                由于某些浏览器实现的是改变一个像素就出发一次，所以一次调整的过程中，事件可能出发很多次，所以不要做大量的计算代码，ff(firefox)是在改变大小结束后出发一次；
            onscroll 事件；
                当窗口发生滚动的时候，会触发的事件；
                获取窗口的滚动的X和Y方向的值：pageXOffset 和 pageYOffset,但是IE浏览器不支持需要用其他方式代替；
                兼容处理；
                滚动案例参考方法：
                document.body.slientHeigt;可以获取body的高度（要有HTML标准头部）；
                document.documentElement.clientHeight;获取可视区高度；（所有浏览器都兼容）
                获取滚动高度：
                    document.documentElement.scrollTop ||document.body.scrollTop
            
        焦点的获取和失去事件
            获取焦点focus
                当标签元素获取焦点的时候触发此事件；
                此事件不会冒泡，浏览器是兼容性非常好；

            失去焦点blur
                当标签元素失去焦点时触发该事件；
                兼容性比较好
            获取焦点focusin,同focus，但是会冒泡或者捕获；
            失去焦点focusout，同blur，是是会冒泡或者捕获；
            Element.focus()方法可以让标签元素获得焦点；
        鼠标事件
            click事件(单击事件)，可以通过点击鼠标左键（默认情况），可以通过键盘的回车键触发
            dbclick：双击事件；
            mousedown 事件：按下鼠标键时触发，不能通过键盘触发；
            mouseup事件：用户释放鼠标键时触发，不能通过键盘触发；
            mouseenter:首次进入元素范围触发，不冒泡；
            mouseover：当鼠标在元素上面或者子元素上面时触发，会冒泡
            mouseleave：当鼠标离开目标元素时触发，不冒泡
            mouseout：当鼠标离开元素上面或者子元素时触发，会冒泡（不常用）；
            mousemove：鼠标在元素内部移动时会重复触发（重点）
            鼠标事件对象（接口）
                鼠标事件中对应的对象都是MOuseEvent对象
                MouseEvent继承UIEvent，UIEvent 继承Event（事件对象）
                UIEvent就是增加了pageX和pageY属性。而MouseEvent又覆盖了pageX和pageY属性。
                鼠标事件对象中包括了；鼠标按键信息，键盘配合鼠标的信息，鼠标的位置信息。
            鼠标事件对象的坐标位置
                客户区坐标（视口内坐标）
                    clientX：视口内很坐标，从视口的最左边开始计算；
                    clientY：是口内纵坐标；
                页面坐标
                    在没有滚动的时候，clientX和pageX相同，IE8不支持pageX
                    pageX就是鼠标点击位置相对于整个文档页面的水平坐标
                    pageY是鼠标点击位置相当于整个文档（不包括不可视区域）的纵坐标；
                屏幕坐标、
                    鼠标点击的时候，通过screenX和screenY来对应鼠标在屏幕的坐标

                    offsetX和offsetY是相对于事件源对象的内边距内侧的距离；
            鼠标对象中的鼠标按键信息
                标准的Dom模型中；按下鼠标后，事件对象中button属性可能有三个值：0主键（左键），1键（滚轮）2鼠标右键；
                IE模型中跟DOM的标准不一致
                    0：表示没有按下按钮
                    1：表示按下了主鼠标按钮；
                    2：表示按下了次鼠标按钮；
                    3：表示同时按下了主次鼠标按钮
                    4：表示按下了中间得鼠标按钮
                    5：表示按下主和中鼠标按钮
                    6：表示是次和中
                    7：表示三个鼠标一起按下；
                鼠标键的兼容处理
                        <script>
                            switch(event.button){
                                case:0
                                case:1
                                case:3
                                case:5
                                case:7
                                    return 0;
                                case:2
                                case:6
                                    return 2;
                                case:4
                                    return 1;
                            };   
                        </script>
                鼠标事件对象的键盘信息、    
                    altLeft:布尔类型，是否按下了alt键。altkey也为true；
                    ctrlLeft：布尔类型，是否按下了ctrl键
                    shiftLeft：布尔类型；            
        鼠标滚轮事件
        键盘事件
            keydown:用户在键盘上按下某个键时才触发，一直按着则不断的触发，并且触发默认行为；
            keypress：用户按下一个键。并产生一个字符时发生（也就是说不包括是shift，alt，ctrl之类的键，就是说用户按了一个能在屏幕上输出的字符的键才能触发）
                    一直按着则会不断的触发
            keyup:用户释放某个键时触发；
            事件触发的顺序：keydown -->keypress-->keyup
            keydown 和 keyup 都是通过事件对象的keyCode获取按下键的字符编码，keypress是通过事件对象的charCode来获取按键的字符（IE8 可以通过keyCode获取）
            键盘事件的对象中包括 shiftKey ctrlKey altKey 和metaKey属性
            键盘分为：可打印字符键和不可打印的功能键，常用的功能件有：Esc Tab Caps Lock  Shift Ctrl  Alt Enter....
        拖放事件
        文本输入事件
            change事件：input textarea select 可以出发change 事件,焦点离开文本时触发；
        。。。

    事件高级
        事件绑定的封装
            标准浏览器：addEventListener(IE9+);
            IE8及以下览器：attachEvent()
            标准浏览器支持冒泡和捕获；
        
        事件对象的分装
            IE浏览器事件对象 通过windowe.event
            标准浏览器通过事件处理程序的参数
            取消默认操作的兼容
            取消事件冒泡和捕获兼容
        
        文档加载完成封装
            IE通过监听document的readystatechange事件，根据document的readystate的值来判断文档是否可以进行交互访问。
            标准浏览器可以通过DOMContentLoaded事件
            最后用window.onload
        
        事件委托
            当子标签非常多的时候，可以灵活的运用事件的捕获的原理来实现父容器上的事件绑定，让所有的子元素享用同一个事件的处理程序；
            优势：动态添加的元素也可以享用此事件，占用较少的内存。（更少的绑定事件对象，提高效率）；

节点操作
    节点的对象Node;
        节点层次：
            一个HTML文档分为很多的节点，节点与不同的类型：文档节点，元素节点，文本节点，注释节点，文档类型节点，属性节点等；
            节点和节点形成了层级结构，也就是文档节点树
            节点对象的Dom类型是Node
    Node接口
        Node接口是对节点的封装，继承的是EventTarget。也是就是说所有的节点都可以对象都可以绑定事件。
        Node常用的属性
            nodeType
                标签 => 1;属性 => 2;文本 => 3;注释 => 8;文档 => 9;
            nodeName
                标签 =>tagname; 属性 => 属性名；文本 =>#text; 文档 =>document
            nodeValue
                文本节点返回文本值，属性节点返回属性内容，注释节点返回注释内容，其他返回Null。
            textContent 属性表示一个节点及其后代的文本内容；（ie9+）；
            innerText是表示一个节点及其后代的“渲染”，文本内容的属性(ie) 
    节点的层级和关系
      节点的关系
            Node.childNodes(NodeList类型)：返回的是子节点，子节点变化会自动更新。
            Node.firstChild:返回第一个子节点或者null；
            Node.lastChild：返回最后一个子节点或者null；
            Node.nextSibling： 返回与该节点同一个级别的下一个节点，如果没有就返回null
            Node.previousSibling：返回当前节点的前一个兄弟节点，如果没有就返回null
            Node.parentNode：返回父亲节点
            Node.parentElement：返回父亲节点标签，如果没有返回null；
    节点的类型
    节点的操作；
        Node接口节点操作的方法（增删改查）
            Node.appendChild(child):添加子节点；
            Node.insertBefore(newElement,referenceElement):在当前节点的某个子节点之前插入一个子节点；
            Node.removeChild(child):从DOM中删除一个子节点，返回删除的节点。
            Node.replaceChild(newChild,oldChild):用指定的节点替换当前节点的一个字节点，并返回被替换掉的节点
            Node.hasChildNodes():如果有子节点返回true否则返回false
            Node.cloneNode(deep):方法返回调用该方法的节点的一个副本，注意id必须设置不同的值。deep是否是深度拷贝。
            Node.contains(c):返回一个布尔值，来表示传入的节点是否为该节点的后代节点；
        创建节点
            document.createElement(tagName):创建元素节点（经常用到）
            document.createAttribute(name):方法创建并返回一个新的属性节点，可以通过nodeValue设置属性节点值。
            document.createComment(data)：创建注释节点
            document.createTextNode:创建一个新的文本节点；


DOM元素样式操作
    内联样式
        Element.style属性可以获得元素的内联样式，并且style中已经把所有的样式都做了处理，可以直接处理访问各个样式的规则
        不能直接对Element.style做赋值操作，但是可以对他的属性做处理
        Element.style.cssText可以直接设置内联样式的文本
        Element.className可以设置内联样式类
        也可以通过Elmement的setAttribute来进行设置样式的属性值

HTML元素的大小和位置
    HTML元素的偏移量
        HTMLElement.offsetParent:返回一个指向最近包含该元素的定位元素，如果没有定位元素，则offsetParent为最近的table table cell 或者根元素
        HTMLElement.offsetLeft:返回当前元素左上角相对性HTMLElement.offsetParent节点的左边界偏移的像素值；
        HTMLElement.offsetTop:返回当前元素左上角相对性HTMLElement.offsetParent节点的顶部的距离；
        HTMLElement.offsetHeight:返回该元素的像素高度，包含该元素的垂直内边距和边框

表单操作
    文本框选中文本
    表单提交，重置
    选择框添加，移除，排序选项
    单选按钮和多选按钮

HTMLInputElement对象的方法和属性
    常用的方法
        focus（）获取焦点
        blur（）失去焦点
        select（）选中文本
        click（）
    常用的属性
        width：
        height：
        value
        name
        type
        disabled
        checked
        defaultChecked
        form
    表单
        常用的属性
            method 对应表单的method属性
            action对应表单action属性
        常用的方法
            submit（）调用表单提交（类似提交按钮）
            reset（）触发表单重置（类似重置按钮）
    Select
        常用的属性
            selectedIndex：可读可设置，表示标签选择的具体选项的索引索引从0开始
            0代表选择第一个option选项
            type：两个值：select-multiple select-one选择类型
            options：获得所有的选项DOM对象

        常用的方法：
        remove（index）删除索引位置的元素
        add（item[,before]）
            item：是HTNLOptionElement 类型实例；
            before：可以省略，可以是一个HTMLOptionElement或是索引，添加的元素在此元素或者索引的前面插入，如果是null或者不存在索引则在后面添加
        臭名昭著的bug
            IE8设置select标签的innerHTML不能用；

第十二节BOM、
    window 对象的属性
        navigator对象
        location 对象
            window.location可用当前请求的地址的对象，也可以用document.location
            常用的属性
                href:可读可写
                protocol：协议的类型；比如“http”
                host：域名加端口比如：xxx.com or xxx.com:80
                hostName:域名（不含端口）
                port：端口
                pathName：url中的路径部分
                search：url中请求的参数"?id=1&name=2"
            常用的方法：
                location.assign(url);页面跳转
                loaction.reload()重新加载页面。他有一个特殊的参数，类型是Boolean，改参数为true时会导致该方法引发的刷新一定会从服务器上加载数据，
                如果是false或者没有制定这个参数，浏览器可能会从缓存当中加载页面；
                location.replace()用给的url替换当前的资源。与assign方法不同的是replce替换的新页面不会被保存在会话的历史history中，这意味着用户不能用后退按钮
                返回到上一层页面。
        screen对象
            window.screen 返回screen对象，代表电脑的屏幕；
            常用的属性：
              screen.availHeight:屏幕可以用的高度（去掉任务栏）;
              screen.availWidth:屏幕可以用的宽度
              screen.height；屏幕的高度（包括所有）
              screen.width；屏幕的宽度（包括所有）
        history 对象
    window对象的方法
        alert
        confirm
        open
        close
        prompt
        print
    




        