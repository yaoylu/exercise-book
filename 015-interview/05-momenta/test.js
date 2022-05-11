/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-30 15:16:18
 */
let x = 1;
// setTimeout(() => {
//   setTimeout(() => {
//     x = x + 1;
//     return x;
//   }, 0);
//   x = x + 2;
//   console.log(x);
//   return x;
// }, 1000);

new Promise((resolve, reject) => {
  setTimeout(() => {
    x = x + 2;
    console.log(x);
    resolve(x);
  }, 1000);
}).then((x) => {
  setTimeout(() => {
    x = x + 1;
    console.log(x);
    return x;
  }, 0);
});

async function add2(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      x = x + 2;
      resolve(x);
    }, 1000);
  });
}
async function add1(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      x = x + 1;
      resolve(x);
    }, 0);
  });
}
(async function () {
  let x = 1;
  x = await add2(x);
  console.log(x);
  x = await add1(x);
  console.log(x);
}());
