"use strict";
// export function sealed(target: Function): void{
//     console.log(`Decorator: Sealing the constructor ${target}`);
//     Object.seal(target);
//     Object.seal(target.prototype);
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.writable = exports.readonly = exports.logger = exports.sealed = void 0;
// class decorator that accepts a parameter
function sealed(name) {
    return function (target) {
        console.log(`Decorator: Sealing the constructor ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
// class decorator that changes the constructor
function logger(target) {
    const newConstructor = function () {
        console.log("Decorator: Creating new instance.");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
function readonly(target, propertyName, descriptor) {
    console.log(`Decorator: Setting ${propertyName} to be readonly.`);
    descriptor.writable = false;
}
exports.readonly = readonly;
function writable(isWritable) {
    return function (target, propertyName, descriptor) {
        console.log(`Decorator: Setting ${propertyName} writable ${isWritable}.`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
