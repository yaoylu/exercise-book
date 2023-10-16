/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-08 18:37:23
 */
function printDom(element, blank = "") {
    console.log(`${blank}<${element.tagName}>`);
    for (let i = 0;i < element.children.length;i++) {
        const subEle = element.children[i];

        printDom(subEle, `${blank}  `);
    }

    console.log(`${blank}</${element.tagName}>`);
}
const myPromise = msg => Promise.resolve(`I have resolved ${msg}`);
function firstFunction() {
    console.log("start first function");
    myPromise("in first function").then(console.log);
    console.log("end first function");
}
async function secondFunction() {
    console.log("start second function");
    console.log(await myPromise("in second function"));
    console.log("end second function");
}
secondFunction();
firstFunction();
let signal1 = false;
let signal2 = false;

function getRandomTime() {
    return Math.random() * 2000; // 随机生成0到2000毫秒的时间间隔
}

function setSignal1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            signal1 = true;
            console.log("Signal 1 is set");
            resolve();
        }, getRandomTime());
    });
}

function setSignal2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            signal2 = true;
            console.log("Signal 2 is set");
            resolve();
        }, getRandomTime());
    });
}

Promise.allSettled([setSignal1(), setSignal2()]).then((results) => {
    const successResults = results.filter((result) => result.status === "fulfilled");
    if (successResults.length === 2) {
        console.log("Both signals are set");
    }
});
function curry(fn) {
    if (typeof fn !== "function") { throw new Error("Please pass fn as a function"); }
    const argList = [] ;
    return function helper(arg) {
        argList.push(arg);
        if(argList.length === fn.length) {
            return fn.call(this, ...argList);
        }
        return helper;
    };
}
function add(a, b, c) { return a + b + c; }
const curriedAdd = curry(add);
const fn = curriedAdd(1)(2);
console.log(fn(3));
console.log(fn(3));