function loggedMethod(originalMethod:Function, _context:any) {
  return function (...args:any[]) {
    console.log(`Log: Entering method ${originalMethod.name} called with arguments ${args}`);
    const result = originalMethod.call(_context, ...args)
    console.log(`Log: Exiting method ${originalMethod.name}`);
    return result;
  }
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
  name: string;
  constructor(name: string) {
    this.name = name;
  }
    @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const p = new Person("Remo");
p.greet(); // Hello, my name is Remo!

