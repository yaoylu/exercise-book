// leetcode 62 不同路径
// 一个机器人位于一个 m x n 网格的左上角（起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish” ）。
// 问总共有多少条不同的路径？
// 示例 1：
// 输入：m = 3, n = 7
// 输出：28

var uniquePaths = function (m, n) {
    const dp = new Array(m).fill().map(()=>new Array(n).fill(0));
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if(i === m - 1 || j === n - 1) {
                dp[i][j] = 1;
            }else{
                dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};
console.log(uniquePaths(3, 7));

// leetcode 63 不同路径 II
// 一个机器人位于一个 m x n 网格的左上角（起始点在下图中标记为“Start” ）。
// 网格中的某些位置被标记为 "obstacle" 。
// 机器人每次只能向下或者向右移动一步。
// 机器人试图达到网格的右下角。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 示例 1：
// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2

var uniquePathsWithObstacles = function (obstacleGrid) {
    if(obstacleGrid.length == 0 || obstacleGrid[0].length == 0) {
        return 0;
    }
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m + 1).fill().map(()=>new Array(n + 1).fill(0));
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if(obstacleGrid[i][j] === 1) {
                continue;
            }
            if(i === m - 1 && j == n - 1) {
                dp[i][j] = 1;
            }else{
                dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));

// leetcode 42 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 示例 1：
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6

// 思路
// 1. 维护两个数组leftMax和rightMax，分别表示当前元素左边的最大值和右边的最大值
// 2. 遍历数组，计算每个元素能接的雨水
// 3. 返回结果
var trap = function (height) {
    const n = height.length;
    const leftArray = new Array(n).fill(0);
    const rightArray = new Array(n + 1).fill(0);
    for(let i = n - 1; i >= 0; i--) {
        rightArray[i] = Math.max(rightArray[i + 1], height[i]);
    }
    let ans = 0;
    leftArray[0] = height[0];
    for(let i = 1; i < n; i++) {
        leftArray[i] = Math.max(leftArray[i - 1], height[i]);
        ans += Math.min(rightArray[i], leftArray[i]) - height[i];
    }
    return ans;
};
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));// 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9

// leetcode 64 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步
// 示例 1：
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7

var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m + 1).fill().map(()=> new Array(n + 1).fill(Infinity));
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if(i == m - 1 && j == n - 1) {
                dp[i][j] = grid[i][j];
            }else{
                dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[0][0];
};
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7

// Leetcode 72 编辑距离
// 给你两个单词word1和word2，请你计算出将word1转换成word2所使用的最少操作数。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符
// 示例 1：
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
// 思路：
// 1. 定义dp数组，dp[i][j]表示word1的前i个字符转换成word2的前j个字符所需要的最少操作数
// 2. 初始化dp数组，dp[i][0] = i, dp[0][j] = j
// 3. 遍历两个字符串，计算dp数组
// 4. 返回dp[m][n]

var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    if(m * n == 0) {
        return m + n;
    }
    const dp = new Array(m + 1).fill().map(()=>new Array(n + 1).fill(0));
    for(let i = 0; i < m; i++) {
        dp[i][0] = i;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = j;
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(word1[i] == word2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
            } else{
                dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i][j], dp[i + 1][j]) + 1;
            }
        }
    }
    return dp[m][n];
};
console.log(minDistance("distance", "springbok")); // 3
console.log(minDistance("intention", "execution")); // 5
