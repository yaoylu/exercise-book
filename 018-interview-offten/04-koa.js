// 【代码题】 实现compose函数, 类似于koa的中间件洋葱模型

// 题目需求

const middleware = [];
middleware.push((next) => {
    console.log(1);
    next();
    console.log(1.1);
});
middleware.push((next) => {
    console.log(2);
    next();
    console.log(2.1);
});
middleware.push((next) => {
    console.log(3);
    next();
    console.log(3.1);
});

const fn = compose(middleware);
fn(() => {});


/*
1
2
3
3.1
2.1
1.1
*/

// 实现compose函数
function compose(middlewares) {
    return  middlewares.reduce((pre, cur) => arg => pre(() => cur(arg)));
}
