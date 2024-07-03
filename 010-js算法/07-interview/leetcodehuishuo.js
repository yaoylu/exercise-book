// leetcode 39 组合总和
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。
// 示例 1：
// 输入：candidates = [2,3,6,7], target = 7
// 输出 [[2,2,3],[7]]

var combinationSum = function (candidates, target) {
    const result = [];
    for(let i = 0; i < candidates.length; i++) {
        const cur = candidates[i];
        const rest = target - cur;
        if(rest === 0) {
            result.push([cur]);
        }else if(rest > 0) {
            const groups = combinationSum(candidates.slice(i), rest);
            groups.forEach((group)=>{

                group.unshift(cur);
                result.push(group);
            });
        }

    }
    return result;
};

console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7))); // [[2,2,3],[7]]

// leetcode 40 组合总和 II
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
// 说明：
// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。
// 示例 1：
// 输入：candidates = [10,1,2,7,6,1,5], target = 8
// 输出：[[1,1,6],[1,2,5],[1,7],[2,6]]

var combinationSum2 = function (candidates, target) {
    const result = [];
    candidates.sort((a, b)=>a - b);
    const backtrack = function (start, path, target) {
        if(target === 0) {
            result.push(path);
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            if(target - candidates[i] < 0) {
                break;
            }
            if(i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            backtrack(i + 1, [...path, candidates[i]], target - candidates[i]);
        }
    };
    backtrack(0, [], target);
    return result;
};
console.log(JSON.stringify(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))); // [[1,1,6],[1,2,5],[1,7],[2,6]]

// leetcode 51 N皇后
// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题的解决方案。
// 每一种解法包含一个不同的 n 皇后问题的棋盘放置方案，该方案中 'Q' 和 '.' 分别表示皇后和空位。
// 示例 1：
// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 思路：
var solveNQueens = function (n) {
    const results = [];
    const board = new Array(n).fill().map(()=>new Array(n).fill("."));
    const isValid = function (row, col) {
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === "Q" && (j === col || Math.abs(i - row) == Math.abs(j - col))) {
                    return false;
                }
            }
        }
        return true;
    };
    const backtrack = function (row) {
        if(row == n) {
            results.push(board.map(item=>item.join("")));
            return;
        }
        for(let j = 0; j < n; j++) {
            if(isValid(row, j)) {
                board[row][j] = "Q";
                backtrack(row + 1);
                board[row][j] = ".";
            }
        }
    };
    backtrack(0);
    return results;
};

console.log(JSON.stringify(solveNQueens(4)));

// leetcode 77 组合
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
//     [2,4],
//     [3,4],
//     [2,3],
//     [1,2],
//     [1,3],
//     [1,4],
//   ]
//
var combine = function(n, k) {
    const results = [];
    const backtrack = function(result, start) {
        if(result.length === k) {
            results.push(result.slice());
            return;
        }
        for(let i = start; i <= n; i++) {

            result.push(i);
            backtrack(result, i + 1);
            result.pop();

        }

    };
    backtrack([], 1);
    return results;
};
console.log(JSON.stringify(combine(4, 2)));

// leetcode 78 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subset = function(nums) {
    const results = [];
    const backtrack = function(result, startIndex) {
        if(startIndex > nums.length) {
            return;
        }
        results.push(result.slice());
        for(let i = startIndex; i < nums.length; i++) {
            result.push(nums[i]);
            backtrack(result, i + 1);
            result.pop();
        }
    };
    backtrack([], 0);
    return results;
};
console.log(JSON.stringify(subset([1, 2, 3])));

// leetcode 79 单词搜索
// 给定一个m x n 二维字符网格board 和一个字符串单词word 。如果word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必題按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 示例 1：
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：tru

var exist = function(board, word) {
    const m = board.length;
    if(m === 0 && word.length !== 0) {
        return false;
    }
    const n = board[0].length;
    let path = new Set();
    let result = false;
    const getNeighbors = function(i, j) {
        const neighbors = [];
        if(i >= 1) {
            neighbors.push([i - 1, j]);
        }
        if(j >= 1) {
            neighbors.push([i, j - 1]);
        }
        if(i < m - 1) {
            neighbors.push([i + 1, j]);
        }
        if(j < n - 1) {
            neighbors.push([i, j + 1]);
        }
        return neighbors;
    };
    const backtrack = function(target, i, j) {

        if(target.length && target[0] === board[i][j] && !path.has(`${i}${j}`)) {
            path.add(`${i}${j}`);
            target = target.substring(1);
            if(target.length === 0 || result) {
                result = true;
                return;
            }
            const neighbors = getNeighbors(i, j);
            for(let n = 0; n < neighbors.length; n++) {
                const [newi, newj] = neighbors[n];
                backtrack(target, newi, newj);
            }
            path.delete(`${i}${j}`);
        }

    };
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(result) {
                return true;
            }
            path = new Set();
            backtrack(word, i, j);
        }
    }
    return result;

};
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // true;

// leetcode 91 解码方法
// 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 给定一个只包含数字的非空字符串，请计算解码方法的总数。
// 题目数据保证答案肯定是一个 32 位的整数。
// 示例 1：
// 输入："12"
// 输出：2
// 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
// 输入"06"
// 输出：0
// 解释："06" 不能被解码为任何字母，因为"6"和"06"不在字母表中。

var numDecodings = function(s) {
    const n = s.length;
    if(s.length === 0 || s[0] === "0") {
        return 0;
    }
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    for(let i = 1; i < n; i++) {

        if(s[i - 1] === "1" || s[i - 1] === "2" && s[i] <= "6") {
            dp[i] += i > 2 ? dp[i - 2] : 1;
        }else if(s[i] === "0") {
            return 0;
        }

        if(s[i] !== "0") {
            dp[i] += dp[i - 1];
        }

    }
    return dp[n - 1];
};
console.log(numDecodings("10")); // 1
console.log(numDecodings("226")); // 3
console.log(numDecodings("1121"));

// leetcode 37 解数独
// 编写一个程序，通过已填充的空单元格来解决数独问题。
// 一个数独的解法需遵循如下规则：
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 空白格用 '.' 表示。
// 输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

var solveSudoku = function(board) {
    const isValid = function (row, col, val) {
        const brow = Math.floor(row / 3);
        const bcol = Math.floor(col / 3);
        for(let i = 0; i < 9; i++) {
            if(board[i][col] === val || board[row][i] === val) {
                return false;
            }
        }
        for(let i = 0; i < 3; i++) {
            for(j = 0; i < 3; j++) {
                if(board[brow * 3 + i][bcol * 3 + j] === val) {
                    return false;
                }
            }
        }
        return true;

    };
    const backtrack = function(row, col, val) {

    };
};
let board = board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(JSON.stringify(solveSudoku(board)));

