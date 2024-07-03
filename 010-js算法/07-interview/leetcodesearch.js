// leetcode 34 搜索范围
// 给你一个升序排列的整数数组 nums ，和一个整数 target 。
// 你要在数组里找出 target 出现的第一个位置和最后一个位置。
// 如果 target 在数组中不存在，返回 [-1, -1] 。
// 你能设计一个时间复杂度为 O(log n) 的算法解决这个问题吗？

// 二分查找
var searchRange = function(nums, target) {
    let left = 0; let right = nums.length - 1;
    let res = [-1, -1];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let l = mid; let r = mid;
            while (nums[l] === target) { l-- }
            while (nums[r] === target) { r++ }
            res = [l + 1, r - 1];
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]