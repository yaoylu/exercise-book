/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-18 16:35:46
 * @LastEditors: alysalu(alysalu@tencent.com)
 */

function getSubHuiWenStringList(str) {
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    let lstr = '';
    let rstr = '';
    for (let j = i; j < str.length; j++) {
      const letter = str[j];
      lstr += letter;
      rstr = letter + rstr;
      if (lstr === rstr) ans.push(str.slice(i, j + 1));
    }
  }
  return ans;
}
console.log(getSubHuiWenStringList('aab'));


function cutHuiWenString(str) {
  const ans = [];

  function canCut(str, stack) {
    if (str.length === 0) {
      ans.push(stack);
      return;
    }
    let lstr = '';
    let rstr = '';
    for (let j = 0; j < str.length; j++) {
      const letter = str[j];
      lstr += letter;
      rstr = letter + rstr;
      if (lstr === rstr) {
        const newStack = [...stack];
        newStack.push(str.slice(0, j + 1));
        canCut(str.slice(j + 1), newStack);
      }
    }
  }
  canCut(str, []);
  return ans;
}
console.log(JSON.stringify(cutHuiWenString('abcba')));

const myAtoi = function (s) {
  s = s.replace(/^ */, '');
  const arr = s.split('');
  let ans = 0;
  let flag = true;
  if (arr.length === 0) return 0;
  if (arr[0] === '-') {
    flag = false;
    arr.shift();
  } else if (arr[0] === '+') {
    flag = true;
    arr.shift();
  }
  while (arr.length > 0) {
    const num = arr.shift();
    if (!/\d/.test(num)) break;
    ans = ans * 10 + +num;
    if (ans > Math.pow(2, 31)) {
      ans = Math.pow(2, 31);
      break;
    }
  }
  return flag ? ans : -ans;
};
function myAtoi2(str) {
  const reg = /^(\+|-)?\d+/g;
  const match = reg.exec(str.trim());
  if (!match) return 0;
  return Math.min(Math.max(+match[0], -(2 ** 31)), (2 ** 31) - 1);
}
console.log(myAtoi2('-12222222222222222'));
