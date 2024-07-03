// 原始 5x8 的二维数组
const originalArray = [
    [{wporank: 4}, {wporank: 2}, {wporank: 7}, {wporank: 1}, {wporank: 6}, {wporank: 5}, {wporank: 3}, {wporank: 8}],
    [{wporank: 3}, {wporank: 6}, {wporank: 5}, {wporank: 4}, {wporank: 8}, {wporank: 1}, {wporank: 2}, {wporank: 7}],
    [{wporank: 1}, {wporank: 5}, {wporank: 8}, {wporank: 3}, {wporank: 2}, {wporank: 7}, {wporank: 4}, {wporank: 6}],
    [{wporank: 7}, {wporank: 3}, {wporank: 1}, {wporank: 5}, {wporank: 4}, {wporank: 2}, {wporank: 8}, {wporank: 6}],
    [{wporank: 6}, {wporank: 1}, {wporank: 2}, {wporank: 8}, {wporank: 7}, {wporank: 3}, {wporank: 5}, {wporank: 4}]
];

// 创建一个 4x10 的新数组
const newArray = Array.from({length: 4}, () => []);

// 将原始数组中的元素合并到一个一维数组
const flatArray = originalArray.flat();

// 按照 wporank 排序合并后的数组
flatArray.sort((a, b) => a.wporank - b.wporank);

// 将排序后的元素填充到新数组中
let index = 0;
while(index < flatArray.length) {
    for (let i = 0; i < 4; i++) {
        if (index < flatArray.length) {
            newArray[i].push(flatArray[index++]);
        }
    }
}

console.log(JSON.stringify(newArray,null,2));