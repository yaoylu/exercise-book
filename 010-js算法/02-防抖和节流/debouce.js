/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-23 13:59:32
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer)  clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function debounce2(func, delay) {
    let timer = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const print = (string) => {
    console.log(string);
};
const delayPrint = debounce(print, 1000);

const main = () => {
    let num = 0;
    const interval = setInterval(() => {
        delayPrint(num);
        if (num >= 100) {
            clearInterval(interval);
        }
        num += 1;
    }, 10);
};

main();
