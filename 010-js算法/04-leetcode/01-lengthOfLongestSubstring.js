/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-28 13:41:41
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
// const lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let long = 0;
//   const map = new Map(); const len = s.length;
//   for (let right = 0; right < len; right++) {
//     if (map.has(s[right]) && map.get(s[right]) >= left) {
//       left = map.get(s[right]) + 1;
//     }
//     long = Math.max(long, right - left + 1);
//     map.set(s[right], right);
//   }
//   return long;
// };

const lengthOfLongestSubstring = function (s) {
  const m = new Map();
  let i = 0;
  let long = 0;
  for (let j = 0; j < s.length; j++) {
    const letter = s[j];
    if (m.has(letter) && m.get(letter) > i) {
      i = m.get(letter) + 1;
    }
    long = Math.max(long, j - i + 1);
    m.set(letter, j);
  }
  return long;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
