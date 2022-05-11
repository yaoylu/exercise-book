/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-23 14:06:11
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

function throttle2(fn, delay) {
  let start = new Date();
  return function (...args) {
    const now = new Date();
    if ((now - start) > delay) {
      fn.apply(this, args);
      start = now;
    }
  };
}
const s = new Date();
setTimeout(() => {
  const b = new Date() - s;
  console.log('b', b);
}, 1000);
