class EventEmitter {
    constructor() {
        // 事件对象，存放订阅的名字和事件
        this._events = {};
    }
    // 订阅事件的方法
    on(eventName,callback) {
        if(!this._events) {
            this._events = {};
        }
        // 合并之前订阅的cb
        this._events[eventName] = [...(this._events[eventName] || []), callback];
    }
    // 触发事件的方法
    emit(eventName, ...args) {
        if(!this._events[eventName]) {
            return;
        }
        // 遍历执行所有订阅的事件
        this._events[eventName].forEach(fn=>fn(...args));
    }
    off(eventName,cb) {
        if(!this._events[eventName]) {
            return;
        }
        // 删除订阅的事件
        this._events[eventName] = this._events[eventName].filter(fn=>fn != cb && fn.l != cb);
    }
    // 绑定一次 触发后将绑定的移除掉 再次触发掉
    once(eventName,callback) {
        const one = (...args)=>{
        // 等callback执行完毕在删除
            callback(...args);
            this.off(eventName,one);
        };
        one.l = callback; // 自定义属性
        this.on(eventName,one);
    }
}
const event = new EventEmitter();

const login1 = function(...args) {
    console.log("login success1", JSON.stringify(args));
};
const login2 = function(...args) {
    console.log("login success2", JSON.stringify(args));
};
event.on("login",login1);
event.once("login",login2);
event.emit("login", 1,2,3,4,5);
event.emit("login", 6,7,8,9);
event.off("login",login1); // 解除订阅
event.emit("login", 10,11,12);

class Subject { // 被观察者 学生
    constructor(name) {
        this.state = "happy";
        this.observers = []; // 存储所有的观察者
    }
    // 收集所有的观察者
    attach(o) { // Subject. prototype. attch
        this.observers.push(o);
    }
    // 更新被观察者 状态的方法
    setState(newState) {
        this.state = newState; // 更新状态
        // this 指被观察者 学生
        this.observers.forEach(o => o.update(this)); // 通知观察者 更新它们的状态
    }
}

class Observer { // 观察者 父母和老师
    constructor(name) {
        this.name = name;
    }
    update(student) {
        console.log("当前" + this.name + "被通知了", "当前学生的状态是" + student.state);
    }
}

const student = new Subject("学生");

const parent = new Observer("父母");
const teacher = new Observer("老师");

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent);
student.attach(teacher);
student.setState("被欺负了");
