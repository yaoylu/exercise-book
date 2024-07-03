const _ = require("lodash");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 3;
// official lodash chunk function
const result = _.chunk(arr, size);
console.log("official function output:", JSON.stringify(result));

function myChunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
const myResult = myChunk(arr, size);
console.log("my function output:", JSON.stringify(myResult));
console.log("my function is the same as the official function:", _.isEqual(myResult, result));
console.log("***********************************************end of chunk test.***********************************************\n");
