/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-21 14:01:28
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
const target = new Date();
const date = target.getDate();
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  },
};
console.log('date', date);
const proxy = new Proxy(target, handler);
console.log('proxy.getDate()', proxy.getDate());

const observerQueue = new Set();
const handler2 = {
  set(target, prop, value) {
    Reflect.set(target, prop, value);
    observerQueue.forEach(observer => observer());
  },
};
const observable = obj => new Proxy(obj, handler2);
const observe = (func) => {
  observerQueue.add(func);
};
const person = observable({
  name: 'a',
  age: 13,
});
const print = () => {
  console.log(`${person.name} is ${person.age}.`);
};
observe(print);
person.name = '张一';


