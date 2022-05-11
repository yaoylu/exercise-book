/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-15 11:20:48
 */

// [27,32,25,60]=>[1,2,1,0];
function findNextBigger(arr) {
  const ans = [];
  const stack = [];
  for (let i = arr.length - 1;i >= 0;i--) {
    // if (arr.length === 0) return ans;

    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      if (stack.length === 0) break;
      stack.pop();
    }

    ans.unshift(stack.length > 0 ? stack[stack.length - 1] - i : 0);
    stack.push(i);
  }
  return ans;
}
console.log(findNextBigger([27, 32, 25, 60]));

const chnNameValue = {
  十: { value: 10, secUnit: false },
  百: { value: 100, secUnit: false },
  千: { value: 1000, secUnit: false },
  万: { value: 10000, secUnit: true },
  亿: { value: 100000000, secUnit: true },
};
const chnNumChar = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
};
function ChineseToNumber(chnStr) {
  let rtn = 0;
  let section = 0;
  let number = 0;
  let secUnit = false;
  const str = chnStr.split('');

  for (let i = 0; i < str.length; i++) {
    const num = chnNumChar[str[i]];
    if (typeof num !== 'undefined') {
      number = num;
      if (i === str.length - 1) {
        section += number;
      }
    } else {
      const unit = chnNameValue[str[i]].value;
      secUnit = chnNameValue[str[i]].secUnit;
      if (secUnit) {
        section = (section + number) * unit;
        rtn += section;
        section = 0;
      } else {
        section += (number * unit);
      }
      number = 0;
    }
  }
  return rtn + section;
}

console.log(ChineseToNumber('三万亿零五十四万七千八百六十三'));
