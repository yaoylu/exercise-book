/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-23 16:50:03
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
const arr = [1, [[2, 3], 4], [5, 6]];

const flat = function* (arr) {
  for (let i = 0;i < arr.length;i++) {
    if (typeof arr[i] === 'number') {
      yield arr[i];
    } else {
      yield *flat(arr[i]);
    }
  }
};
for (const num of flat(arr)) {
  console.log(num);
}

const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
  return 4;
};
console.log([...myIterable]);

let gen = function* () {
  yield 1;
  yield 2;
};
const g = gen();
console.log(g[Symbol.iterator]() === g); // true
console.log(g[Symbol.iterator] === gen); // false
function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}

const n = numbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());
const nums = {};
nums[Symbol.iterator] = numbers;
for (const i of nums) console.log(i);
console.log([...nums]);


const g2 = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

const i = g2();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
function* inner() {
  yield 'hello!';
  yield 'inner';
}

function* outer1() {
  yield 'open1';
  yield inner();
  yield 'close1';
}

gen = outer1();
console.log(gen.next().value); // "open"
console.log(gen.next().value); // 返回一个遍历器对象
console.log(gen.next().value); // "close"

function* outer2() {
  yield 'open2';
  yield* inner();
  yield 'close2';
}

gen = outer2();
console.log(gen.next().value); // "open"
console.log(gen.next().value); // "hello!"
console.log(gen.next().value); // "inner"
console.log(gen.next().value); // close


function* foo() {
  yield 2;
  yield 3;
  return 'foo';
}

function* bar() {
  yield 1;
  const v = yield* foo();
  console.log(`v: ${v}`);
  yield 4;
}

const it = bar();

console.log(it.next());

// {value: 1, done: false}
console.log(it.next());
// {value: 2, done: false}
console.log(it.next());
// {value: 3, done: false}
console.log(it.next());
// "v: foo"
// {value: 4, done: false}
console.log(it.next());
// {value: undefined, done: true}
