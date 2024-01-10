/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-04-06 13:52:44
 */
class Parent {
    constructor() {
        this.name = "Parent";
        this.arrowFunction = () => {
            console.log("Arrow function this.name:", this.name);
        };
    }
    RegularFunction() {
        console.log("Regular function this.name:", this.name);
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.name = "Child";
        this.arrowFunction = () => {
            super.arrowFunction();
            console.log("Arrow function this.name:", this.name);
        };
    }

    RegularFunction () {
        super.RegularFunction();
        console.log("Regular function this.name:", this.name);
    }
}

const child = new Child();
child.arrowFunction();
