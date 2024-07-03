"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function loggedMethod(originalMethod, _context) {
    return function (...args) {
        console.log(`Log: Entering method ${originalMethod.name} called with arguments ${args}`);
        const result = originalMethod.call(_context, ...args);
        console.log(`Log: Exiting method ${originalMethod.name}`);
        return result;
    };
}
// function loggedMethod(originalMethod: any, _context: any) {
//     function replacementMethod(this: any, ...args: any[]) {
//         console.log("LOG: Entering method.")
//         const result = originalMethod.call(this, ...args);
//         console.log("LOG: Exiting method.")
//         return result;
//     }
//     return replacementMethod;
// }
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
__decorate([
    loggedMethod
], Person.prototype, "greet", null);
const p = new Person("Remo");
p.greet(); // Hello, my name is Remo!
