// 练习贪心算
// 基本思路：每次都选择最优的解
// 通用解题思路：
// 1. 问题能够分解成子问题来解决
// 2. 子问题的最优解能递推到最终问题的最优解
// 3. 通过贪心策略来选择每一步的最优解，从而得到全局最优解
// 4. 贪心策略的选择不能依赖后面的选择
// 5. 贪心算法的实现步骤：
//     a. 建立数学模型来描述问题
//     b. 把求解的问题分成若干个子问题
//     c. 对每一子问题求解，得到子问题的局部最优解
//     d. 把子问题的局部最优解合成原来问题的一个解
// 6. 贪心算法的应用场景：
//     a. 问题能够分解成子问题来解决
//     b. 子问题的最优解能递推到最终问题的最优解
//     c. 通过贪心策略来选择每一步的最优解，从而得到全局最优解
// 7. 贪心算法的优点：
//     a. 算法的执行效率比较高，通常可以在O(nlogn)和O(n)之间
//     b. 算法的思路比较简单，容易实现
// 8. 贪心算法的缺点：
//     a. 贪心算法得到的结果不一定是最优解
//     b. 不能解决所有问题
// 9. 贪心算法的应用：
//     a. 哈夫曼编码
//     b. Prim和Kruskal最小生成树算法
//     c. Dijkstra单源最短路径算法
//     d. 贪心算法适用的场景
//         i. 最优子结构
//         ii. 贪心选择性质
//         iii. 无后效性
//         iv. 可以证明贪心算法的正确性
// 10. 贪心算法的实现：
//     a. 从问题的某一个初始解出发
//     b. while 循环，每次迭代都要做出一个贪心选择
//     c. 由两种可能的实现方式：
//         i. 递归实现
//         ii. 非递归实现
// 11. 贪心算法的实现步骤：
//     a. 建立数学模型来描述问题
//     b. 把求解的问题分成若干个子问题
//     c. 对每一子问题求解，得到子问题的局部最优解
//     d. 把子问题的局部最优解合成原来问题的一个解

// leetcode 举例
// leetcode 455 分发饼干
// 题目描述：
// 假设你是一位很棒的家长，想要给你的孩子们一些饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j]。
// 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 思路分析：
// 1. 首先对孩子和饼干的胃口和尺寸进行排序
// 2. 从胃口最小的孩子开始，依次判断是否有满足胃口的饼干
// 3. 如果有满足胃口的饼干，就给孩子分配这个饼干
// 4. 如果没有满足胃口的饼干，就继续判断下一个孩子
// 5. 最后返回满足孩子数量即可

var findContentChildren = function (g, s) {
    g.sort((a, b)=>a - b);
    s.sort((a, b)=>a - b);
    let cookie = 0;
    let child = 0;
    while(child < g.length && cookie < s.length) {
        if(g[child] <= s[cookie]) {
            child++;
        }
        cookie++;
    }
    return child;
};
const g = [1, 2, 3];
const s = [1, 1];
console.log(findContentChildren(g, s)); // 1

// leetcode 435 无重叠区间
// 题目描述：
// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
// 注意：
// 1. 可以认为区间的终点总是大于它的起点
// 2. 区间 [1,2] 和 [2,3] 的边界相互接触，但没有重叠

// 思路分析：
// 1. 首先对区间按照区间的结束位置进行排序
// 2. 从第一个区间开始，依次判断是否有重叠的区间
// 3. 如果有重叠的区间，就需要移除一个区间
// 4. 如果没有重叠的区间，就继续判断下一个区间
// 5. 最后返回移除区间的数量即可

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // 按照区间的结束位置进行排序
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;// 移除区间的数量
    let end = intervals[0][1];// 结束位置
    // 从第一个区间开始，依次判断是否有重叠的区间
    for (let i = 1; i < intervals.length; i++) {
        // 如果有重叠的区间，就需要移除一个区间
        if (intervals[i][0] < end) {
            count++;
        } else {
            // 如果没有重叠的区间，就继续判断下一个区间
            end = intervals[i][1];
        }
    }
    // 最后返回移除区间的数量即可
    return count;
};
const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
console.log(eraseOverlapIntervals(intervals)); // 1

// leetcode 452 用最少数量的箭引爆气球
// 题目描述：
// 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。
// 一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。
// 给你一个数组 points ，返回引爆所有气球所必须射出的 最小 弓箭数。
// 示例1：

// 输入：points = [[10,16],[2,8],[1,6],[7,12]]
// 输出：2
// 解释：气球可以用2支箭来爆破:
// -在x = 6处射出箭，击破气球[2,8]和[1,6]。
// -在x = 11处发射箭，击破气球[10,16]和[7,12]

var findMinArrowShots = function (points) {
    points.sort((a, b)=>a[1] - b[1]);
    let count = 0;
    let end = points[0][1];
    for(let i = 1; i < points.length; i++) {
        if(points[i][0] < end) {
            count++;
        }else{
            end = points[i][1];
        }
    }
    return points.length - count;
};
const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points)); // 2

// leetcode 406 根据身高重建队列
// 题目描述：
// 假设有打乱顺序的一群人站成一个队列。每个人由一个整数对(h, k)表示，其中 h 是这个人的身高，k 是排在这个人前面且身高大于或等于 h 的人数。编写一个算法来重建这个队列。
// 注意：
// 示例 1：

// 输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// 输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// 解释：
// 编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。
// 编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。
// 编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。
// 编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
// 编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。
// 编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
// 因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。

var reconstructQueue = function (people) {
    const res = [];
    // 按照身高降序，k升序排序
    people.sort((a, b)=>b[0] - a[0] || a[1] - b[1]);
    for(let i = 0; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i]); // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
    }
    return res;
};
const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(JSON.stringify(reconstructQueue(people))); // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

// leetcode 121 买卖股票的最佳时机
// 题目描述：
// 给定一个数组 prices ，它的第i个元素prices[i]表示一支给定股票第 i 天的价格。
// 你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 示例 1：
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

var maxProfit = function (prices) {
    let buy = Infinity;
    let profit = 0;
    for(let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]);
        profit = Math.max(profit, prices[i] - buy);
    }
    return profit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5

// leetcode 122 买卖股票的最佳时机 II
// 难度：中等
// 题目描述：
// 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 示例 1：
// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
//      总利润为 4 + 3 = 7 。
var maxProfit2 = function (prices) {
    let profit = 0;
    let buy = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > buy) {
            profit += prices[i] - buy;
        }
        buy = prices[i];
    }
    return profit;
};
const prices2 = [7, 1, 5, 3, 6, 4];

// 难度：中等
// leetcode 605 种花问题
// 题目描述：假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给你一个整数数组 flowerbed 表示花坛（flowerbed）中花的状态，其中 flowerbed[i] = 1 表示在花坛中有一朵花，flowerbed[i] = 0 表示花坛中没有花。
// 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
// 示例 1：

// 输入：flowerbed = [1,0,0,0,1], n = 1
// 输出：true
// 示例 2：

// 输入：flowerbed = [1,0,0,0,1], n = 2
// 输出：false

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            if((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                count++;
                flowerbed[i] = 1;
            }
        }
    }
    return count >= n;

};
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false

// leetcode 334 递增的三元子序列
// 题目描述：
// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
// 如果存在这样的三元组下标 (i, j, k) 其中 0 ≤ i < j < k ≤ nums.length - 1 ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。
// 示例 1：
// 输入：nums = [1,2,3,4,5]
// 输出：true
// 解释：任何 i < j < k 的三元组都满足题意

// 思路分析：
// 1. 定义两个变量 small 和 mid，分别表示第一小和第二小的元素
// 2. 遍历数组，如果当前元素小于等于 small，则更新 small
// 3. 如果当前元素小于等于 mid，则更新 mid
// 4. 如果当前元素大于 mid，则说明找到了递增的三元子序列，返回 true
// 5. 遍历结束后，返回 false

var increasingTriplet = function (nums) {
    let small = Infinity;
    let mid = Infinity;
    for(const num of nums) {
        if(num <= small) {
            small = num;
        }else if(num <= mid) {
            mid = num;
        }else{
            return true;
        }
    }

    return false;
};

const nums = [20, 100, 10, 12, 5, 13];
console.log(increasingTriplet(nums)); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false]

console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true

// leetcode 134 加油站
// 题目描述：
// 一条环路上有n个加油站，其中第i个加油站有汽油gas[i]升。
// 你有一辆油箱容量无限的的汽车，从第i个加油站开往第i+1个加油站需要消耗汽油cost[i]升。
// 你从其中的一个加油站出发，开始时油箱为空。
// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回-1。
// 说明：
// 如果题目有解，该答案即为唯一答案。
// 输入的数组均为非空数组，且长度相同。
// 输入数组中的元素均为非负数。
// 示例 1：
// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3
// 解释:
// 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引。
// 思路：

var canCompleteCircuit = function (gas, cost) {
    if(gas.length !== cost.length || gas.reduce((a, b)=>a + b) < cost.reduce((a, b)=>a + b)) {
        return -1;
    }
    let start = 0;
    const len = gas.length;
    let tank = 0;
    for(let i = 0; i < len; i++) {
        tank += gas[i] - cost[i];
        if(tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return start;
};
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost)); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1

// leetcode 253 会议室 II
// 题目描述：
// 给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，
// 请你找到一个可以安排所有会议的最小用时数。
// 示例 1：
// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：2
// 示例 2：
// s输入：intervals = [[7,10],[2,4]]
// 输出：1

var minMeetingRooms = function (intervals) {
    const rooms = [];
    intervals.sort((a, b)=>a[1] - b[1]);
    for(const interval of intervals) {
        const index = rooms.findIndex(room=>room <= interval[0]);
        if(index === -1) {
            rooms.push(interval[1]);
        }else{
            rooms[index] = interval[1];
        }
    }
    return rooms.length;
};
const intervals2 = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals2)); // 2
console.log(minMeetingRooms([[7, 10], [2, 4]])); // 1

// leetcode 321 拼接最大数
// 题目描述：
// 给定长度分别为m和n的两个数组，其元素由0-9构成，表示两个自然数各位上的数字。现在从这两个数组中选出k(k<=m+n)个数字拼接成一个新的数，
// 要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
// 求满足该条件的最大数。结果返回一个表示该最大数的长度为k的数组。
// 说明: 请尽可能地优化你算法的时间和空间复杂度。
// 示例 1:
// 输入:
// nums1 = [3, 4, 6, 5]
// nums2 = [9, 1, 2, 5, 8, 3]
// k = 5
// shuchu: [9, 8, 6, 5, 3]
// 示例 2:
// 输入:
// nums1 = [6, 7]
// nums2 = [6, 0, 4]
// k = 5
// 输出: [6, 7, 6, 0, 4]
// 思路：
// 1. 从数组 nums1 中选择 i 个元素组成最大子序列
// 2. 从数组 nums2 中选择 k-i 个元素组成最大子序列
// 3. 合并两个子序列，得到最大数
// 4. 遍历所有可能的 i，找到最大数

var maxNumber = function (nums1, nums2, k) {
    function findMaxSubsequence(nums, k) {
        if(k === 0 || nums.length === 0) {
            return [];
        }
        const stack = [];
        for(let i = 0; i < nums.length; i++) {
            while(stack.length > 0 && stack[stack.length - 1] < nums[i] && stack.length + nums.length - i > k) {
                stack.pop();
            }
            stack.push(nums[i]);
        }
        return stack.slice(0, k);
    }
    function merge(nums1, nums2) {
        const res = [];
        while(nums1.length && nums2.length) {
            if(nums1[0] === nums2[0]) {
                let i = 1;
                while(nums1[i] === nums2[i] && i < nums1.length && i < nums2.length) {
                    i++;
                }
                if(i === nums1.length || nums1[i] < nums2[i]) {
                    res.push(nums2.shift());
                }else {
                    res.push(nums1.shift());
                }
            } else if(nums1[0] > nums2[0]) {
                res.push(nums1.shift());
            }else {
                res.push(nums2.shift());
            }
        }
        while(nums1.length) {
            res.push(nums1.shift());
        }
        while(nums2.length) {
            res.push(nums2.shift());
        }
        return res;
    }
    const res = [];
    for(let i = 0; i <= k; i++) {
        if(i <= nums1.length && k - i <= nums2.length) {
            const s1 = findMaxSubsequence(nums1, i);
            const s2 = findMaxSubsequence(nums2, k - i);
            res.push(merge(s1, s2));
        }
    }
    return res.reduce((pre, cur)=>pre > cur ? pre : cur);
};

console.log(maxNumber([2, 5, 6, 4, 4, 0], [7, 3, 8, 0, 6, 5, 7, 6, 2], 15)); // [7,3,8,2,5,6,4,4,0,0,6,5,7,6,2]

// leetcode 135 分发糖果
// 题目描述：
// n 个孩子站成一排。每个孩子都被分配一个评分，给孩子们糖果。每个孩子至少分配到 1 个糖果。
// 相邻的孩子中，评分高的孩子必顶得多的糖果。
// 那么，这样分配糖果，最少需要多少糖果？
// 示例 1：
// 输入：[1,0,2]
// 输出：5
// 解释：你可以分别给这三个孩子分配 2、1、2 颗糖果。
// 示例 2：
// 输入：[1,2,2]
// 输出：4
// 解释：你可以分别给这三个孩子分配 1、2、1 颗糖果。
// 思路：
// 1. 初始化数组 candies，元素值都为1
// 2. 从左到右遍历一次，如果右边孩子评分比左边高，则右边孩子的糖果数为左边孩子的糖果数加1
// 3. 从右到左遍历一次，如果左边孩子评分比右边高，且左边孩子的糖果数不大于右边孩子的糖果数，则左边孩子的糖果数为右边孩子的糖果数加1
// 4. 最后返回糖果总数

var candy = function (ratings) {
    const len = ratings.length;
    const candies = new Array(len).fill(1);
    for(let i = 0; i < len - 1; i++) {
        if(ratings[i] < ratings[i + 1]) {
            candies[i + 1] = candies[i] + 1;
        }
    }
    for(let i = len - 1; i > 0; i--) {
        if(ratings[i] < ratings[i - 1]) {
            candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1);
        }
    }
    return candies.reduce((pre, cur)=>pre + cur);

};
console.log(candy([1, 0, 2])); // 5
console.log(candy([1, 2, 2])); // 4

// leetcode 397 整数替换
// 题目描述：
// 给定一个正整数 n ，你可以做如下操作：
// 如果 n 是偶数，则用 n / 2替换 n 。
// 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
// n 变为 1 所需的最小替换次数是多少？
// 示例 1：
// 输入：n = 8
// 输出：3

var integerReplacement = function (n) {
    if(n === 1) {
        return 0;
    }
    if(n % 2 === 0) {
        return integerReplacement(n / 2) + 1;
    }else{
        return Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1;
    }
};
console.log(integerReplacement(8)); // 3

// leetcode 1029 两地调度
// 题目描述：
// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。
// 示例 1：
// 输入：costs = [[10,20],[30,200],[50,30],[60,40]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 30。
// 第四个人去 B 市，费用为 40。
// 最低总费用为 10 + 30 + 30 + 40 = 110。

var twoCitySchedCost = function (costs) {
    let total = 0;
    let a = 0;
    const diffa = [];
    const diffb = [];
    const n = costs.length;
    if(n === 0 || n % 2 !== 0) {
        return 0;
    }
    for(let i = 0; i < n; i++) {
        const [ca, cb] = costs[i];
        if(ca < cb) {
            a++;
            diffa.push(cb - ca);
            total += ca;
        }else{
            diffb.push(ca - cb);
            total += cb;
        }
    }
    if(a < n / 2) {
        diffb.sort((a, b)=>a - b);
        total += diffb.slice(0, n / 2 - a).reduce((pre, cur)=>pre + cur);
    }else if(a > n / 2) {
        diffa.sort((a, b)=>a - b);
        total += diffa.slice(0, a - n / 2).reduce((pre, cur)=>pre + cur);
    }
    return total;
};
const costs = [[10, 20], [30, 200], [50, 30], [60, 90]]; //
console.log(twoCitySchedCost(costs));

// leetcode 955 删列造序 II
// 题目描述：
// 给定由 N 个小写字母字符串组成的数组 A，其中每个字符串长度相等。
// 选取一个删除索引序列，对于 A 中的每个字符串，删除对应每个索引处的字符。
// 比如，有 A = ["abcdef", "uvwxyz"]，删除索引序列 {0, 2, 3}，删除后 A 为["bef", "wxy"]。
// 假设，我们选择了一组删除索引 answer，那么在执行删除操作之后，最终得到的数组的元素是按 字典序（strs[0] <= strs[1] <= strs[2] ... <= strs[n - 1]）排列的，然后请你返回 answer.length 的最小可能值。

// 示例 1：
// 输入：["ca","bb","ac"]
// 输出：1
// 解释：
// 删除第一列后，A = ["a", "b", "c"]。

var minDeletionSize = function(strs) {
    if(strs.length == 0) {
        return 0;
    }
    const n = strs[0].length;
    const m = strs.length;

    const arr = new Array(m).fill().map(()=>new Array());
    let cnt = 0;
    for(let i = 0; i < n; i++) {
        let flat = true;
        arr[0][i - cnt] = strs[0][i];
        for(let j = 1; j < m; j++) {
            arr[j][i - cnt] = strs[j][i];
            if(arr[j - 1][i] >= arr[j][i]) {
                flat = false;
            }
            if(arr[j - 1][i] > arr[j][i]) {
                cnt++;
                break;
            }
        }
        if(flat) {
            break;
        }
    }
    return cnt;

};
const strs = ["abx", "agz", "bgc", "bfc"];
console.log(minDeletionSize(strs)); // 1
console.log(minDeletionSize(["xga", "xfb", "yfa"]));

