/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-02 11:06:55
 */
// Question: How would you make this work?

function add(...args) {
  if (args.length === 2) {
    return args[0] + args[1];
  }
  return function (arg2) {
    return args[0] + arg2;
  };
}

console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7

// Hint about reusing middle variable if the candidate want to use a result/sum variable to store args/sum
const add2 = add(2);
console.log(add2(5)); // 7
console.log(add2(7)); // 9


const foo = 'Hello';
(function () {
  const bar = ' World';
  console.log(foo + bar);
}());
console.log(foo + bar);

// 并发5亿/月 写入。读取100倍
// 5年
// 微博 用户查看倒序，无限滚动 api 前端组件
