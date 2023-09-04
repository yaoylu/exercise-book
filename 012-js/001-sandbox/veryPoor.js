//https://mp.weixin.qq.com/s?__biz=MzA4MjA1MDM3Ng==&mid=2450827820&idx=1&sn=c2c1b1f758866b918cbe899b1af2af74&chksm=886ba60bbf1c2f1dde75fd925ebc5404f8ef3538c8c819d23b588e2b5e5f6d9ebfe1e3c12a4e#rd
var foo = "foo1";

// 执行上下文对象
const ctx = {
  func: variable => {
    console.log(variable);
  },
  foo1: "f1"
};

// 非常简陋的沙箱
function veryPoorSandbox(code, ctx) {
  // 使用with，将eval函数执行时的执行上下文指定为ctx
  with (ctx) {
    // eval可以将字符串按js代码执行，如eval('1+2')
    eval(code);
    func(foo1);
  }
}

// 待执行程序
const code = `func(foo)`;

veryPoorSandbox(code, ctx); 
// 打印结果："f1"，不是最外层的全局变量"foo1"