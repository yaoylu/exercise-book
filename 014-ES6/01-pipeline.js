/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-01 22:03:54
 */
const pipeline = (...funcs) => val => (
  funcs.reduce((preVal, func) => func(preVal), val));

const plus1 = val => val + 1;
const mult2 = val => val * 2;
const result = pipeline(plus1, mult2, plus1, mult2)(5);
console.log('result :>> ', result);

const myInstanceof = (example, ClassFunc) => {
  let proto = Object.getPrototypeOf(example);
  const target = ClassFunc.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === target) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
console.log(myInstanceof([], Number));
const tse = [] instanceof Array;
console.log('tse :>> ', tse);
