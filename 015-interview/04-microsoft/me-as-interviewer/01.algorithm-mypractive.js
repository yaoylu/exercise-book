function curry(fn) {
    return function curried(...args) {

        if (args.length >= fn.length) {
            return fn.call(this, ...args);
        }else{
            return function(...moreArgs) {
                return curried.call(this, ...args,...moreArgs);
            };
        }
    };
}

// 需要被柯里化的函数
function add(a, b, c) {
    return a + b + c + (this.id||0);
}

// curryAdd是柯里化之后的函数

const curryAdd = curry(add);
const add2 = curryAdd(2); // function
const add5 = add2(3); // function
console.log(add5(4)); // 9
console.log(add5(5));// 10
console.log(curryAdd(2, 3, 4)); // 9
console.log(curryAdd(2)(3, 4));// 9
console.log(curryAdd(2, 3)(4));// 9

function minCut(str) {
    const n = str.length;
    const g = new Array(n).fill(0).map(()=>{ return new Array(n).fill(true); });
    for(let i =n-1;i>=0;--i) {
        for (let j=i+1;j<n;++j) {
            g[i][j] = str[j]==str[i] && g[i+1][j-1];
        }
    }

    const f  = new Array(n).fill(Number.MAX_SAFE_INTEGER);

    for(let i =0;i<n;i++) {
        if(g[0][i]) {
            f[i] = 0;
        }else{
            for (let j=0;j<i;j++) {
                if(g[j+1][i]) {
                    f[i] = Math.min(f[i],f[j]+1);
                }
            }
        }
    }
    return f[n-1];
}

console.log(minCut("aabb"));