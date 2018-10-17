//定义一个human类型

function Human(name,age){
    this.name = name;
    this.age = age;
}

Human.prototype.show = function(){
    console.log(this.name +'的年龄是'+this.age);
}

var h = new Human('小明',12);
h.show();

// es3 ~ es5 继承: 通过原型继承；

//es6 中定义类型和继承；

//定义类型和构造函数，类名要符合标志符的规范；

class Student {
    //定义构造函数,如果构造函数没有定义就会默认的添加一个空的构造函数。会有一个constructor(){}
    constructor(name,age){
        //给实例添加属性
        this.name = name;
        this.age = age;
    }
    //在类的定义内部定义的方法都是在原型上；
    showStu(){
        console.log(this.name+"的年龄"+this.age)
    }
    get Name(){
        return  this.name;
    }
    set Name(val){
        this.name = val||''
    }
    static Add(a,b){
      return a+b
    }
}
//创建一个类型的实例，通过class定义的类型，必须通过new来构造一个实例。

let s = new Student('小hog',13);

s.showStu();
s.Name = '1243';
s.showStu();
s.Name = '';
s.showStu();