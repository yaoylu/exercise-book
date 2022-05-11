/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-09 18:47:15
 */
function changeLight(i) {
  function f(i) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(i++ % 3);
      }, 2);
    });
    return promise;
  }
  f(i).then((value) => {
    f(value);
  });
}
changeLight(0);
