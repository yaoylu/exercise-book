console.log(1 instanceof Number);
console.log("1" instanceof String);
console.log(true instanceof Boolean);
console.log(null instanceof Object);
console.log (undefined instanceof Object);
console.log([] instanceof Array);
console.log({} instanceof Object);
console.log("Array instanceof Object", Array instanceof Object);
console.log("Object instanceof Function:", Object instanceof Function);
console.log("Object instanceof Object:", Object instanceof Object);
console.log("Function instanceof Object:", Function instanceof Object);
console.log("Object instanceof Array:", Object instanceof Array);
console.log("Array instanceof Function:", Array instanceof Function);
console.log("Function === Object:", Function === Object);
console.log("Function.__proto__ === Object.__proto__:", Function.__proto__ === Object.__proto__);
console.log("Function.__proto__:", Function.__proto__);
console.log("Object.__proto__:", Object.__proto__);
console.log("Object.__proto_=== Object.prototype:", Object.__proto__ === Object.prototype); // false
console.log("Function.prototype === Object.prototype:", Function.prototype === Object.prototype);// false
console.log("Function.prototype.__proto__ === Object.prototype:", Function.prototype.__proto__ === Object.prototype);// true

console.log("new Object() instanceof Object:", new Object() instanceof Object);
console.log("new Function() instanceof Function:", new Function() instanceof Function);
console.log("new Function() instanceof Object:", new Function() instanceof Object);
console.log("new Object() instanceof Function:", new Object() instanceof Function);

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy");

if (dog instanceof Animal) {
    console.log("dog is an instance of Animal");
}

if (dog instanceof Dog) {
    console.log("dog is an instance of Dog");
}

function myInstanceOf(obj, constructor) {
    if(typeof obj !== "object" || obj === null)  { return false; };
    let proto = obj.__proto__;
    while (proto) {
        if(proto === constructor.prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}
console.log("myInstanceOf(dog, Animal):", myInstanceOf(dog, Animal));