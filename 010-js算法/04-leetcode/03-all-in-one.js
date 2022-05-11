/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-02-28 22:41:11
 */
const isValid = function (s) {
  const mapping = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];
  for (const letter of s) {
    console.log(letter);
    if (Object.keys(mapping).indexOf(letter) >= 0) {
      stack.push(letter);
    } else {
      if (letter !== mapping[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid('[{}()]'));

const removeDuplicates = function (nums) {
  let p = 0;
  for (let i = 0;i < nums.length;i++) {
    if (nums[p] !== nums[i]) {
      p += 1;
      nums[p] = nums[i];
    }
  }
  return p + 1;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8]));


const maxSubArray = function (nums) {
  let max = nums[0];
  for (let i = 1;i < nums.length;i++) {
    nums[i] = Math.max(nums[i], nums[i - 1] + nums[i]);
    if (nums[i] > max) max = nums[i];
  }
  return max;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));

const maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];
  for (let i = 1;i < prices.length ;i++) {
    max = Math.max(prices[i] - min, max);
    min = Math.min(min, prices[i]);
  }
  return max;
};
console.log(maxProfit([7, 6, 4, 13, 1]));

const maxProfit2 = function (prices) {
  let sum = 0;
  let max = 0;
  let min = prices[0];
  for (let i = 1;i < prices.length - 1 ;i++) {
    if (prices[i + 1] < prices[i]) {
      max = Math.max(prices[i] - min, 0);
      sum += max;
      min = prices[i + 1];
    } else {
      min = Math.min(min, prices[i]);
    }
  }
  max = Math.max(prices[prices.length - 1] - min, 0);
  sum += max;
  return sum;
};
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

const longestPalindrome = function (s) {
  let longest = '';
  for (let i = 0;i < s.length;i++) {
    let s1 = '';
    let s2 = '';
    for (let j = i;j < s.length;j++) {
      s1 += s[j];
      s2 = s[j] + s2;
      if (s1 === s2 && longest.length < s1.length) longest = s1;
    }
  }
  return longest;
};

console.log(longestPalindrome('babad'));
const push = (arr, val) => {
  if (arr.indexOf(val) < 0) arr.push(val);
};
const generateParenthesis = function (n) {
  const arr = [];
  const helper = (current, left, right) => {
    if (current.length === 2 * n) {
      arr.push(current);
      return;
    }
    if (left < n) helper(`${current}(`, left + 1, right);
    if (right < left) helper(`${current})`, left, right + 1);
  };
  helper('', 0, 0);
  return arr;
};
console.log(generateParenthesis(4));

const curry = func => function innerCurry(...args) {
  if (args.length >= func.length) {
    return func.apply(null, args);
  }
  return function (...args2) {
    return innerCurry(...args, ...args2);
  };
};
const merge = function (nums1, m, nums2, n) {
  let j = 0;
  let i;
  for (i = 0;i < m + n;i++) {
    if (j === n) {
      nums1.pop();
    }
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      j += 1;
    }
  }

  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

const addBinary = function (a, b) {
  // const intA = parseInt(a, 2);
  // const intB = parseInt(b, 2);
  // const sum = intA + intB;
  // return sum.toString(2);
  const result = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let flag = 0;
  let val;
  while (i >= 0 && j >= 0) {
    [val, flag] = sum(a[i], b[j], flag);
    result.unshift(val);
    i -= 1;
    j--;
  }
  while (i >= 0) {
    [val, flag] = sum(a[i], 0, flag);
    result.unshift(val);
    i--;
  }
  while (j >= 0) {
    [val, flag] = sum(b[j], 0, flag);
    result.unshift(val);
    j--;
  }
  if (flag > 0) result.unshift(flag);
  function sum(x, y, flag) {
    val = parseInt(x, 10) + parseInt(y, 10) + flag;
    return [val % 2, val >= 2 ? 1 : 0];
  }
  return result.join('');
};

console.log(addBinary('10', '1100'));

// const isMatch = function (s, p) {
//   const reg = new RegExp(`^${p}$`);
//   return reg.test(s);
// };

const isMatch = function (s, p) {
  const n = s.length; const m = p.length;
  function dfs(i, j) {
    if (i === n && j === m) return true;
    if (i > n || j >= m) return false;
    const isSame = p[j] === '.' || s[i] === p[j];
    if (p[j + 1] === '*') return isSame && (dfs(i + 1, j) || dfs(i, j + 2));
    return isSame && dfs(i + 1, j + 1);
  }
  return dfs(0, 0);
};

console.log('match', isMatch('a', 'a*a'));
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const mergeKLists = function (lists) {
  function mergeTwo(list1, list2) {
    const pre = new ListNode(0, list1);
    let cur = pre;
    let cur2 = list2;
    while (cur.next) {
      if (!cur2) return;
      if (cur.next.val > cur2.val) {
        const n = cur.next;
        cur.next = cur2;
        cur2 = cur2.next;
        cur.next.next = n;
      }
      cur = cur.next;
    }
    return pre.next;
  }
  if (lists.length === 0) {
    return null;
  }
  if (lists.length === 1) {
    return lists[0];
  }
  let ans = lists[0];
  for (let i = 1;i < lists.length;i++) {
    ans = mergeTwo(ans, lists[i]);
  }
  return ans;
};

// 通配符匹配
const isMatch2 = function (s, p) {
  if (p === '*' || s === p) return true;
  const dp = Array.from(Array(s.length + 1), _ => Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let i  = 1; i <= p.length; i++) {
    if (!dp[0][i - 1]) break;
    if (p[i - 1] === '*') dp[0][i] = true;
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }
  return dp[s.length][p.length];
};

console.log(isMatch2('a', 'a*'));
