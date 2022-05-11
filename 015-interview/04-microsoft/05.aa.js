/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-15 14:44:31
 */
// abc =>[abc,bca]
function getList(str) {
  if (str === '') return '';
  if (str.length === 1) return [str];
  function f(str, stack) {
    if (str.length === 2) {
      stack.push(str);
      const reverse = str.split('').reverse()
        .join('');
      if (reverse !== str) {
        stack.push(reverse);
      }
      return stack;
    }
    const letter =  str[0];
    const newStack = f(str.slice(1), [...stack]);
    const result = [];
    for (let i = 0;i < newStack.length ;i++) {
      for (let j = 0;j <= newStack[i].length;j++) {
        const letterList = newStack[i].split('');
        letterList.splice(j, 0, letter);

        const newString = letterList.join('');
        result.push(newString);
      }
    }
    return result;
  }
  const ans = f(str, []);
  ans.filter((str, index) => index === ans.findIndex(stri => stri === str));

  return ans;
}

console.log(getList('abb'));

