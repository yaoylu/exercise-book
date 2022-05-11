/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-23 13:59:32
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer)  clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
