// leetcode 28 实现 strStr()
// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
// 如果不存在，则返回 -1 。
// 说明：
// 当 needle 是空字符串时，我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
// 示例 1：
// 输入：haystack = "hello", needle = "ll"
// 输出：2

var strStr = function (haystack, needle) {
    if(needle === "") { return 0 }
    for (let i = 0; i < haystack.length; i++) {
        if(i + needle.length > haystack.length) {
            break;
        }
        let j = 0;
        while(j < needle.length) {
            if(haystack[i + j] !== needle[j]) {
                break;
            }
            j++;
        }
        if(j == needle.length) {
            return i;
        }
    }
    return -1;
};
const haystack = "leetcode";
const needle = "leeto";
console.log(strStr(haystack, needle)); // 2

// leetcode 31 下一个排列
// 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
// 必须 原地 修改，只允许使用额外常数空间。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[1,3,2]
// 思路
// 1. 从右往左找到第一个非递增的元素，记为i
// 2. 从右往左找到第一个比nums[i]大的元素，记为j
// 3. 交换nums[i]和nums[j]
// 4. 反转i后面的元素
// /**
var nextPermutation = function (nums) {
    let i;
    const len = nums.length;
    for(i = len - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            break;
        }
    }
    if(i >= 0) {
        for(let j = len - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                const s = nums[j];
                nums[j] = nums[i];
                nums[i] = s;
                break;
            }
        }
    }
    let k = 0;
    while(i + 1 + k < len - 1 - k) {
        const s = nums[i + 1 + k];
        nums[i + 1 + k] = nums[len - 1 - k];
        nums[len - 1 - k] = s;
        k++;
    }
    return nums;
};

console.log(nextPermutation([1, 3, 2, 1]));

// leetcode 75 颜色分类
// 给定一个包含 n 个元素的数组，其中 nums[i] 的值在 [0,1,2] 中。
// 对这个数组进行原地排序。
// 示例 1：
// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]
// 思路
// 1. 维护一个变量min，初始值为0
// 2. 从左往右遍历数组，如果当前元素等于min，则跳过
// 3. 从当前元素的下一个元素开始遍历，如果小于当前元素，则交换
// 4. 更新min的值

var sortColor = function (nums) {
    let min = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === min) {
            continue;
        }
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                const s = nums[j];
                nums[j] = nums[i];
                nums[i] = s;
            }
            if(nums[i] === min) {
                break;
            }
        }
        min = nums[i];
    }
    return nums;
};
console.log(sortColor([2, 0, 2, 1, 1, 0]));