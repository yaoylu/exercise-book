
// export function sealed(target: Function): void{
//     console.log(`Decorator: Sealing the constructor ${target}`);
//     Object.seal(target);
//     Object.seal(target.prototype);
// }

// class decorator that accepts a parameter
export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`Decorator: Sealing the constructor ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

// class decorator that changes the constructor
export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function() {
        console.log("Decorator: Creating new instance.");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

export function readonly(target: Object, propertyName: string, descriptor: PropertyDescriptor): void {
    console.log(`Decorator: Setting ${propertyName} to be readonly.`);
    descriptor.writable = false;
}

export function writable(isWritable: boolean) {
    return function(target: Object, propertyName: string, descriptor: PropertyDescriptor): void {
        console.log(`Decorator: Setting ${propertyName} writable ${isWritable}.`);
        descriptor.writable = isWritable;
    };
}