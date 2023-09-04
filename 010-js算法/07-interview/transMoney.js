
// trans(123456) —— 十二万三千四百五十六
// trans（100010001）—— 一亿零一万零一
function trans(numb) {
    const number = String(numb);
    if (number.match(/\D/) || number.length >= 18) return;
    const zhArray = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; // 数字对应中文
    const baseArray = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿']; // 进位填充字符，第一位是 个位，可省略
    let result = String(number).split('')
        .reverse()
        .map((item, index) => {
            const n = parseInt(item, 10);
            // 位上数字为0，且不是万亿
            const noBase = Number(n) === 0 && index % 4;
            return zhArray[n] + (noBase ? '' : baseArray[index]);
        })
        .reverse()
        .join('')
        .replace(/^一十/, '十')
        .replace(/零+/g, '零')
        .replace(/零(?=亿|万)+/g, '')
        .replace(/零$/, '');
    if (result.length === 0) {
        result = '零';
    }
    console.log(result);
    return result;
}

const test = () => {
    trans(10123416);
    trans(100010001000);
    trans(1145601010100110);
    trans(1015);
    trans(987654321230);
};
test();
