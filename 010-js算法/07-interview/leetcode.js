"use strict";
// leetcode 1 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
// 示例：
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// const twoSum = (nums, target)=> {
//     const map = {};
//     for(let i = 0;i < nums.length;i++) {
//         const current = nums[i];
//         const other = target - current;
//         if(map[other] !== undefined) {
//             return [map[other],i];
//         }else{
//             map[current] = i;
//         }
//     }
//     return null;
// };
// const nums = [3,2,4];
// console.log(twoSum(nums, 6));
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var threeSumClosest = function (nums, target) {
//     let minDistance = Infinity;
//     let closestSum = 0;
//     nums.sort((a, b) => a - b);
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < nums.length - 2; i++) {
//         left = i + 1;
//         right = nums.length - 1;
//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
//             const distance = Math.abs(sum - target);
//             if (distance < minDistance) {
//                 minDistance = distance;
//                 closestSum = sum;
//             }
//             if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return closestSum;
// };
// const nums = [-1, 2, 1, -4];
// const target = 1;
// console.log(threeSumClosest(nums, target)); // 2
// leetcode 260 只出现一次的数字
// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。
// 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var singleNumber = function (nums) {
//     let bitmask = 0;
//     for (const num of nums) {
//         bitmask ^= num; // 两个只出现一次的数字的异或结果
//     }
//     const diff = bitmask & -bitmask;  // 两个只出现一次的数字的二进制表示中的最右边的 1
//     let x = 0;
//     for (const num of nums) {
//         if ((num & diff) !== 0) { // 根据这一位是否为 0 或 1 将所有数字分成两组
//             x ^= num;// 两个只出现一次的数字在不同的组中
//         }
//     }
//     return [x, bitmask ^ x];
// };
// const nums = [1, 2, 1, 3, 2, 5];
// console.log(singleNumber(nums)); // [3,5]
// leetcode 316 去除重复字母
// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。
// 需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
// 贪心算法
// 1. 维护一个栈，对于每个字符，如果字符已经在栈中，则跳过
// 2. 如果字符不在栈中，插入之前，和之前的元素比较，如果字典序更小且之前的元素在之后还有，则弹出
// 3. 插入字符到栈中
// 4. 返回栈中的元素
// /**
//  * @param {string} s
//  * @return {string}
//  */
var removeDuplicateLetters = function (s) {
    const stack = []; // 辅助栈
    const inStack = {}; // 栈中是否存在
    const count = {}; // 记录每个字符出现的次数
    for (const char of s) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    for (const char of s) {
        // 每遍历过一个字符，都将对应的计数减一
        count[char]--;
        // 如果字符已经在栈中，则跳过
        if (inStack[char]) {
            continue;
        }
        // 插入之前，和之前的元素比较，如果字典序更小且之前的元素在之后还有，则弹出
        while (stack.length && stack[stack.length - 1] > char) {
            if (count[stack[stack.length - 1]] === 0) {
                break;
            }
            inStack[stack.pop()] = false;
        }
        stack.push(char);
        inStack[char] = true;
    }
    return stack.join("");
};
const s = "bcabc";
console.log(removeDuplicateLetters(s)); // "abc"
const s2 = "cbacdcbc";
console.log(removeDuplicateLetters(s2)); // "acdb"
// leetcode 8 字符串转换整数 (atoi)
// 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
// 示例 1：
// 输入: "42"
// 输出: 42
// 示例 2：
// 输入: "   -42"
// 输出: -42
// 解释: 第一个非空白字符为 '-', 它是一个负号。
//      我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
var myAtoi = function (s) {
    let res = 0;
    let flag = true;
    let start = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " " && !start) {
            continue;
        }
        if (s[i] === "-" && !start) {
            flag = !flag;
            start = true;
            continue;
        }
        if (s[i] === "+" && !start) {
            start = true;
            continue;
        }
        start = true;
        const num = parseInt(s[i]);
        if (isNaN(num)) {
            break;
        } else {
            res = res * 10 + num;
        }
    }
    if (flag && res > Math.pow(2, 31) - 1) {
        res = Math.pow(2, 31) - 1;
    } else if (!flag && res > Math.pow(2, 31)) {
        res = Math.pow(2, 31);
    }
    return flag ? res : -res;
};
console.log(myAtoi("  -042")); // 42
// leetcode 9 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 例如，121 是回文，而 123 不是。
var isPalindrome = function (x) {
    const s = x.toString();
    let i = 0;
    let j = s.length - 1;
    while (j > i) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
console.log(isPalindrome(121)); // true

// leetcode 25 K 个一组翻转链表
// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 示例：
// 给你这个链表：1->2->3->4->5
// k = 2
// 输出：2->1->4->3->5

var reverseKGroup = function (head, k) {
    const dummy = { next: head };
    let pre = dummy;
    let end = dummy;
    function reverse(head) {
        let pre = null;
        let cur = head;
        while(cur) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
    while(end.next) {
        for(let i = 0; i < k && end !== null; i++) {
            end = end.next;
        }
        if(end === null) {
            break;
        }
        const start = pre.next;
        const next = end.next;
        end.next = null;
        pre.next = reverse(start);
        start.next = next;
        pre = start;
        end = pre;
    }
    return dummy.next;

};
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};
console.log(JSON.stringify(reverseKGroup(head, 2)));// 2->1->4->3->5

// leetcode 26 删除有序数组中的重复项
// 给你一个有序数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必顋在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 示例 1：
// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2]

var removeDuplicates = function (nums) {
    if(nums.length === 0) {
        return 0;
    }
    let slow = 0;
    for(let fast = 1; fast < nums.length; fast++) {
        if(nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return nums.slice(0, slow + 1);
};
console.log(removeDuplicates([1, 1, 2])); // [1,2]

const justification = `Lisa Lu graduated from Xi'an University of Electronic Science and Technology with a master’s degree in 2012 and joined the team in 2022. Before that, she worked at Tencent for 10 years.
Lisa has excelled in Core UX, contributing to the super component development, growth features. Her efforts resulted in substantial metric improvements: +0.81% DAU, +0.60% mCFV, +1.00% CI DAU, +6.61% search/UU, and +0.97% revenue (zh-cn). 
While she steadily accumulates DAU achievements, she also made contributions to the engineering excellence and quality with her innovations. The library she created, superComponentData, serves all super components and solves the problem of super component sharing localization strings and conducting experiments. Currently, superComponentData has supported over 40 experiments and maintained more than 20 shared localization strings. She standardized the method of mapping data for over 130 cards, greatly facilitating the expansion of card data protocols between frontend and backend. Meanwhile it resulted in a reduction in bundle size, slashing a total of 164kb across 15 canvases.
She has made a significant contribution to onboarding the CSAT survey across various canvases. The CSAT survey component she created supports the WPO team in collecting user feedback and has been shipped to Prong2/NTP/WinHP canvases. It enables the collection of user feedback for feed level/news cards/30+ SD cards/carousel cards. Currently, it collects around 50,000 feedback responses daily, providing data support for the WPO team to optimize their ranking algorithm.
Lisa actively contributes to diversity and inclusion, participating in the Women's Mentoring Circle, leading team sessions, and supporting training. 
Lisa’s dedication has driven growth, enhanced user experience, making her invaluable to the team.`;
console.log(justification.length); // 1000

;

// leetcode 38 外观数列
// 给定一个正整数 n ，输出外观数列的第 n 项。
// "1" 是第 1 项。
// 输入：n = 4
// 输出："1211"
var countAndSay = function (n) {
    if(n === 1) {
        return "1";
    }
    const str = countAndSay(n - 1);
    let result = "";
    let curValue = str[0];
    let curCount = 1;
    for(let i = 1; i < str.length; i++) {
        if(str[i] === curValue) {
            curCount += 1;
        }else{
            result += `${curCount}${curValue}`;
            curCount = 1;
            curValue = str[i];
        }
    }
    result += `${curCount}${curValue}`;
    return result;
};
console.log(countAndSay(6)); // "1211"

// leetcode 41 缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 示例 1：
// 输入：nums = [1,2,0]
// 输出：3

var firstMissingPositive = function (nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        if(nums[i] <= 0 || nums[i] > n) {
            continue;
        }
        let value = nums[i];
        while(nums[value - 1] !== value) {
            const next = nums[value - 1];
            nums[value - 1] = value;
            value = next;
            if(value <= 0 || value > n) {
                break;
            }
        }
    }
    for(let i = 0; i < n; i++) {
        if(nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;

};
console.log(firstMissingPositive([1, 2, 0])); // 3

// leetcode 44 通配符匹配
// 给定一个字符串 s 和一个字符模式 p ，实现一个支持 '?' 和 '*' 的通配符匹配。
// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。
// 示例 1：
// 输入：s = "aa", p = "a"
// 输出：false
var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;
    const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = true;
                continue;
            }
            if(i === 0 && j > 0) {
                dp[0][j] = false;
                continue;
            }
            if(j === 0 && i > 0) {
                dp[i][0] = p[i - 1] === "*" ? dp[i - 1][0] : false;
                continue;
            }

            if(p[i - 1] === "*") {
                dp[i][j] = dp[i - 1][j - 1] || dp[i][j - 1] || dp[i - 1][j];
            }else if(p[i - 1] === "?" || p[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }else{
                dp[i][j] = false;
            }
        }

    }
    return dp[n][m];
};
console.log(isMatch("abcabczzzde", "*abc???de*")); // false

// leetcode 45 跳跃游戏 II
// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。
// 示例 1:
// 输入: [2,3,1,1,4]
// 输出: 2
// 示例 2:
// 输入: [2,1,0,1,4]
// 输出: 0
// 解释: 跳到最后一个位置的最小跳跃数是 2。
// 从下标 0 跳到下标 1，跳 1 步，然后跳 3 步到达数组的最后一个位置。

var jump = function (nums) {
    const n = nums.length;
    if(n <= 1) {
        return 0;
    }
    const dp = new Array(n).fill(Infinity);
    dp[n - 1] = 0;
    for(let i = n - 2; i >= 0; i--) {
        for(let j = 1; j <= nums[i] && i + j < n; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[j + i]);
        }
    }
    return dp[0];
};
console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 1])); // 2