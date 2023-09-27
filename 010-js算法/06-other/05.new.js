function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const res = constructor.apply(obj, args);
    return typeof res ==="object"? res: obj;
}

Function.prototype.myCall = function (context, ...args) {
    if(typeof context !=="object") {
        context = new Object(context);
    }
    const key =  Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
};

function f(a,b) {
    console.log(a+b);
    console.log(this.name);
}
const obj2={
    name: "name"
};
f(1,3);
f.myCall(obj2,1,3);

Function.prototype.myBind = function(context, ...args) {
    if(typeof context !== "object") {
        context = new Object(context);
    }
    const self = this;
    const bound = function(...interArgs) {
        self.apply(this instanceof bound ? bound: context, [...args, ...interArgs]);
    };

    bound.prototype = Object.create(this.prototype);
    return bound;

};
// 测试用例

function Person(name, age) {
    console.log("Person name：", name);
    console.log("Person age：", age);
    console.log("Person this：", this); // 构造函数this指向实例对象
}

// 构造函数原型的方法
Person.prototype.say = function() {
    console.log("person say");
};

// 普通函数
function normalFun(name, age) {
    console.log("普通函数 name：", name);
    console.log("普通函数 age：", age);
    console.log("普通函数 this：", this);  // 普通函数this指向绑定bind的第一个参数 也就是例子中的obj
}

var obj = {
    name: "poetries",
    age: 18
};

// 先测试作为构造函数调用
var bindFun = Person.myBind(obj, "poetry1"); // undefined
var a = new bindFun(10); // Person name: poetry1、Person age: 10、Person this: fBound {}
a.say(); // person say

// 再测试作为普通函数调用
var bindNormalFun = normalFun.myBind(obj, "poetry2"); // undefined
bindNormalFun(12);
// 普通函数name: poetry2
// 普通函数 age: 12
// 普通函数 this: {name: 'poetries', age: 18}

function add(a,b,c) {
    return a+b+c;
}
function curry(fn) {

    return function innercurry(...args1) {
        if(args1.length >= fn.length) {
            return fn.apply(this, args1);
        }else{
            return function(...args2) {
                return innercurry(...args1,...args2);
            };
        }

    };
}
// function curry(fn) {
//     // your code here
//     return function curryInner(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         }
//         return function (...args2) {
//             return curryInner(...args, ...args2);
//         };
//     };
// }
const join = (a, b, c) => `${a}_${b}_${c}`;

const curriedJoin = curry(join);

const s = curriedJoin(1, 2, 3);
console.log(s);
console.log(curriedJoin(1)(2, 3));
console.log(curry(add)(1)(2,3));
