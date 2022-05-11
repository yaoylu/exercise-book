/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-02-28 19:16:59
 */
function curry(fn) {
  // your code here
  return function curryInner(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return curryInner(...args, ...args2);
    };
  };
}
const join = (a, b, c) => `${a}_${b}_${c}`;


const curriedJoin = curry(join);

const s = curriedJoin(1, 2, 3);
console.log(s);
console.log(curriedJoin(1)(2, 3));
// console.log(s);
function flat(arr, depth = 2) {
  // your imeplementation here
  let rst = arr;
  for (let i = 0;i < depth;i++) {
    rst = rst.reduce((pre, item) => pre.concat(item), []);
  }
  return rst;
}


console.log(flat([1, 3, [4, [2]]]));

Object.getPrototypeOf({});
