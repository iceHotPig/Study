//es5 中的get和set

function Stu(name){
    this._name = name;
}

Stu.prototype = {
    constructor: Stu,
    get Name(){
        return this._name;
    },
    set Name(val){
        if(val){
            this._name = val;
        }
    }
}

var s = new Stu('nihao');
console.log(s.Name);
s.Name = 'i am rkx';
console.log(s.Name);
s.Name = '';
console.log(s.Name);
