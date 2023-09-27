function print() {
    console.log("print");
    console.log(this);
}
const arrowParent = {
    a: "test",
    printArrowFunction: ()=>{
        console.log("printArrowFunction");
        console.log(this);
    }
};
print.apply(arrowParent);
console.log(this);
arrowParent.printArrowFunction();
