
// 给定你一个整数数组 nums

// 我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。

// 如果可以完成则返回true ， 否则返回 false  。
var splitArraySameAverage = function(nums) {
    if (nums.length === 1) {
        return false;
    }
    const n = nums.length;
    const m = Math.floor(n / 2);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * n - sum;
    }

    const left = new Set();
    for (let i = 1; i < (1 << m); i++) {
        let tot = 0;
        for (let j = 0; j < m; j++) {
            if ((i & (1 << j)) !== 0) {
                tot += nums[j];
            }
        }
        if (tot === 0) {
            return true;
        }
        left.add(tot);
    }
    let rsum = 0;
    for (let i = m; i < n; i++) {
        rsum += nums[i];
    }
    for (let i = 1; i < (1 << (n - m)); i++) {
        let tot = 0;
        for (let j = m; j < n; j++) {
            if ((i & (1 << (j - m))) != 0) {
                tot += nums[j];
            }
        }
        if (tot === 0 || (rsum !== tot && left.has(-tot))) {
            return true;
        }
    }
    return false;
};

var splitArraySameAverage2 = function(nums) {
    if (nums.length === 1) {
        return false;
    }
    const n = nums.length; const m = Math.floor(n / 2);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    let isPossible = false;
    for (let i = 1; i <= m; i++) {
        if (sum * i % n === 0) {
            isPossible = true;
            break;
        }
    }
    if (!isPossible) {
        return false;
    }
    const dp = new Array(m + 1).fill(0).map(() => new Set());
    dp[0].add(0);
    for (const num of nums) {
        for (let i = m; i >= 1; i--) {
            for (const x of dp[i - 1]) {
                const curr = x + num;
                if (curr * n === sum * i) {
                    return true;
                }
                dp[i].add(curr);
            }
        }
    }
    return false;
};

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7,8]
// 输出: true
// 解释: 我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。
// 示例 2:

// 输入: nums = [3,1]
// 输出: false

console.log(splitArraySameAverage2([1,2,3,4,5,6,7,8]));
console.log(splitArraySameAverage2([3,1]));

// // 函数柯里化封装（这个封装可以直接复制走使用）
// function curry(fn, args) {
//     var length = fn.length;
//     var args = args || [];
//     return function () {
//         newArgs = args.concat(Array.prototype.slice.call(arguments));
//         if (newArgs.length < length) {
//             return curry.call(this, fn, newArgs);
//         } else {
//             return fn.apply(this, newArgs);
//         }
//     };
// }

// 需要被柯里化的函数
function add(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

// curryAdd是柯里化之后的函数
const curryAdd = curry(add);
const add2 = curryAdd(2);
const add5 = add2(3);
console.log(add5(4));
console.log(add5(5));
console.log(curryAdd(2, 3, 4));
console.log(curryAdd(2)(3, 4));
console.log(curryAdd(2, 3)(4));

Function.prototype.myCall = function (context, ...args) {
    if(typeof context !=="object") {
        context = new Object(context);
    }
    const key =  Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
};
function print(str) {
    console.log(`${this.name || ""} ${str}`);
}
const obj={
    name: "obj2"
};
print("hello");
print.myCall(obj,"hello");