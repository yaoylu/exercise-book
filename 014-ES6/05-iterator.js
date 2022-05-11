const obj = {
  n: 10,
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: obj.n--,
          done: obj.n <  0,
        };
      },
    };
  },
};
const a = obj[Symbol.iterator]();
let value = a.next();
while (!value.done) {
  console.log('value', value);
  value = a.next();
}
console.log('value', value);


for (const key of obj) {
  console.log('key', key);
}
