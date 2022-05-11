/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-22 11:57:50
 * @LastEditors: VM_199_188_centos
 */
const permute = function (nums) {
  const ans = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      return ans.push(path);
    }
    nums.forEach((num) => {
      if (path.indexOf(num) < 0) {
        backtrack(path.concat(num));
      }
    });
  };
  backtrack([]);
  return ans;
};
console.log('permute([1,2,3])', JSON.stringify(permute([1, 2, 3])));

const permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];

  const used = new Array(nums.length).fill(false);
  const backtrack = (path) => {
    if (path.length === nums.length) {
      return ans.push(path);
    }
    for (let i = 0;i < nums.length;i++) {
      const num = nums[i];
      if (used[i] || (used[i - 1] && nums[i] === nums[i - 1])) continue;
      used[i] = true;
      backtrack(path.concat(num));
      used[i] = false;
    }
  };
  backtrack([]);
  return ans;
};
console.log('permuteUnique([1,1,2])', JSON.stringify(permuteUnique([1, 1, 2])));

const letterPermutation = function (s) {
  const letters = s.split('');
  const ans = [];
  letters.sort((a, b) => a - b);
  const used = new Array(letters.length).fill(false);
  const backtrack = (path) => {
    if (path.length === letters.length) return ans.push(path.join(''));
    for (let i = 0;i < letters.length;i++) {
      const letter = letters[i];
      if (used[i] || (letters[i] === letters[i - 1] && used[i - 1])) continue;
      used[i] = true;
      backtrack(path.concat(letter));
      used[i] = false;
    }
  };
  backtrack([]);
  return ans;
};
console.log('letterPermutation(abc)', JSON.stringify(letterPermutation('aabc')));

setTimeout(() => {
  setTimeout(() => {
    x = x + 1;
    return x;
  }, 0);
  x = x + 2;
  console.log(x);
  return x;
}, 1000);
