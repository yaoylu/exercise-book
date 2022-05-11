/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-08 18:37:23
 */
function printDom(element, blank = '') {
  console.log(`${blank}<${element.tagName}>`);
  for (let i = 0;i < element.children.length;i++) {
    const subEle = element.children[i];

    printDom(subEle, `${blank}  `);
  }

  console.log(`${blank}</${element.tagName}>`);
}
const myPromise = msg => Promise.resolve(`I have resolved ${msg}`);
function firstFunction() {
  console.log('start first function');
  myPromise('in first function').then(console.log);
  console.log('end first function');
}
async function secondFunction() {
  console.log('start second function');
  console.log(await myPromise('in second function'));
  console.log('end second function');
}
secondFunction();
firstFunction();
