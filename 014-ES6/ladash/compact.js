const _ = require("lodash");
let funIndex = 0;
function dividingLine(text) {
    funIndex++;
    console.log(funIndex + "." + text.padStart((100 - text.length) / 2 + text.length, "*").padEnd(100, "*") + "\n");
}

// start of compact test.
const arr = [0, 1, false, 2, "", 3,undefined,"0",null,4,NaN,5,6,7,8,9];
// official lodash compact function
const compactResult = _.compact(arr);
console.log("official function output:", JSON.stringify(compactResult));

function myCompact(arr) {
    return arr.filter(Boolean);
}
const myCompactResult = myCompact(arr);
console.log("my function output:", JSON.stringify(myCompactResult));
console.log("my function is the same as the official function:", _.isEqual(myCompactResult, compactResult));
dividingLine("end of compact test.");
// end of compact test.

// start of concat test.
const arr1 = [1];
const arr2 = [2, [3]];
const arr3 = [4, [5, [6]]];
// official lodash concat function
const concatResult = _.concat(arr1, arr2, arr3);
console.log("official function output:", JSON.stringify(concatResult));

function myConcat(...args) {
    return args.reduce((acc, val) => acc.concat(val), []);
}
const myConcatResult = myConcat(arr1, arr2, arr3);
console.log("my function output:", JSON.stringify(myConcatResult));
console.log("my function is the same as the official function:", _.isEqual(myConcatResult, concatResult));
dividingLine("end of concat test.");
// end of concat test.

// start of difference test.
const arr4 = [1, 2, 3];
const arr5 = [2, 3, 4];
// official lodash difference function
const differenceResult = _.difference(arr4, arr5);
console.log("official function output:", JSON.stringify(differenceResult));

function myDifference(arr1, arr2) {
    return arr1.filter(val => !arr2.includes(val));
}
const myDifferenceResult = myDifference(arr4, arr5);
console.log("my function output:", JSON.stringify(myDifferenceResult));
console.log("my function is the same as the official function:", _.isEqual(myDifferenceResult, differenceResult));
dividingLine("end of difference test.");
// end of difference test.

// start of differenceBy test.
const arr6 = [1.1, 2.2, 3.3];
const arr7 = [2.2, 3.3, 4.4];
// official lodash differenceBy function
const differenceByResult = _.differenceBy(arr6, arr7, Math.floor);
console.log("official function output:", JSON.stringify(differenceByResult));
function myDifferenceBy(arr1, arr2, fn) {
    return arr1.filter(val => ! arr2.map(fn).includes(fn(val)));
}
const myDifferenceByResult = myDifferenceBy(arr6, arr7, Math.floor);
console.log("my function output:", JSON.stringify(myDifferenceByResult));
console.log("my function is the same as the official function:", _.isEqual(myDifferenceByResult, differenceByResult));
dividingLine("end of differenceBy test.");
// end of differenceBy test.

// start of differenceWith test.
const arr8 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const arr9 = [{ x: 1, y: 2 }];
// official lodash differenceWith function
const differenceWithResult = _.differenceWith(arr8, arr9, _.isEqual);
console.log("official function output:", JSON.stringify(differenceWithResult));
function myDifferenceWith(arr1, arr2, comparator) {
    return arr1.filter(val1 => !arr2.some(val2 => comparator(val1, val2)));
}
const myDifferenceWithResult = myDifferenceWith(arr8, arr9, _.isEqual);
console.log("my function output:", JSON.stringify(myDifferenceWithResult));
console.log("my function is the same as the official function:", _.isEqual(myDifferenceWithResult, differenceWithResult));
dividingLine("end of differenceWith test.");
// end of differenceWith test.

// start of drop test.
const arr10 = [1, 2, 3];
const n = 2;
// official lodash drop function
const dropResult = _.drop(arr10, n);
console.log("official function output:", JSON.stringify(dropResult));
function myDrop(arr, n) {
    return arr.slice(n);
}
const myDropResult = myDrop(arr10, n);
console.log("my function output:", JSON.stringify(myDropResult));
console.log("my function is the same as the official function:", _.isEqual(myDropResult, dropResult));
dividingLine("end of drop test.");
// end of drop test.

// start of dropRight test.
const arr11 = [1, 2, 3];
const n1 = 2;
// official lodash dropRight function
const dropRightResult = _.dropRight(arr11, n1);
console.log("official function output:", JSON.stringify(dropRightResult));
function myDorp(arr, n) {
    return arr.slice(0, -n);
}
const myDropRightResult = myDorp(arr11, n1);
console.log("my function output:", JSON.stringify(myDropRightResult));
console.log("my function is the same as the official function:", _.isEqual(myDropRightResult, dropRightResult));
dividingLine("end of dropRight test.");
// end of dropRight test.

// start of dropRightWhile test.
const users = [
    { user: "barney", active: true },
    { user: "fred", active: false},
    { user: "pebbles", active: false}];
// official lodash dropRightWhile function
const dropRightWhileResult = _.dropRightWhile(users, (user) => user.active);
console.log("official function output:", JSON.stringify(dropRightWhileResult));
dividingLine("end of dropRightWhile test.");
// end of dropRightWhile test.

// start of dropWhile test.
// official lodash dropWhile function
const dropWhileResult = _.dropWhile(users, (user) => user.active);
console.log("official function output:", JSON.stringify(dropWhileResult));
dividingLine("end of dropWhile test.");
// end of dropWhile test.

// start of fill test.
const arr12 = [1, 2, 3];
const value = "a";
const start = 1;
const end = 2;
// official lodash fill function
const fillResult = _.fill(arr12, value, start, end);
console.log("official function output:", JSON.stringify(fillResult));
function myFill(arr, value, start, end) {
    return arr.map((val, index) => index >= start && index < end ? value : val);
}
const myFillResult = myFill(arr12, value, start, end);
console.log("my function output:", JSON.stringify(myFillResult));
console.log("my function is the same as the official function:", _.isEqual(myFillResult, fillResult));
dividingLine("end of fill test.");
// end of fill test.

// start of findIndex test.
const findIndexResult = _.findIndex(users, (user) => user.user === "pebbles");
console.log("official function output:", JSON.stringify(findIndexResult));
function myFindIndex(arr, fn) {
    return arr.findIndex(fn);
}
const myFindIndexResult = myFindIndex(users, (user) => user.user === "pebbles");
console.log("my function output:", JSON.stringify(myFindIndexResult));
console.log("my function is the same as the official function:", _.isEqual(myFindIndexResult, findIndexResult));
dividingLine("end of findIndex test.");
// end of findIndex test.

// start of findLastIndex test.
const findLastIndexResult = _.findLastIndex(users, (user) => !user.active);
console.log("official function output:", JSON.stringify(findLastIndexResult));

function myFindLastIndex(arr, fn) {
    const reverseIndex = arr.reverse().findIndex(fn);
    return reverseIndex === -1 ? -1 : arr.length - 1 - reverseIndex;
}
const myFindLastIndexResult = myFindLastIndex(users, (user) => !user.active);
console.log("my function output:", JSON.stringify(myFindLastIndexResult));
console.log("my function is the same as the official function:", _.isEqual(myFindLastIndexResult, findLastIndexResult));
dividingLine("end of findLastIndex test.");

// start of flatten test.
const arr13 = [1, [2, [3, [4]], 5]];
// official lodash flatten function
const flattenResult = _.flatten(arr13);
console.log("official function output:", JSON.stringify(flattenResult));
function myFlatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}
const myFlattenResult = myFlatten(arr13);
console.log("my function output:", JSON.stringify(myFlattenResult));
console.log("my function is the same as the official function:", _.isEqual(myFlattenResult, flattenResult));
dividingLine("end of flatten test.");
// end of flatten test.

// start of flattenDeep test.
// official lodash flattenDeep function
const flattenDeepResult = _.flattenDeep(arr13);
console.log("official function output:", JSON.stringify(flattenDeepResult));
function myFlattenDeep(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? myFlattenDeep(val) : val), []);
}
const myFlattenDeepResult = myFlattenDeep(arr13);
console.log("my function output:", JSON.stringify(myFlattenDeepResult));
console.log("my function is the same as the official function:", _.isEqual(myFlattenDeepResult, flattenDeepResult));
dividingLine("end of flattenDeep test.");
// end of flattenDeep test.

// start of flattenDepth test.
const depth = 1;
// official lodash flattenDepth function
const flattenDepthResult = _.flattenDepth(arr13, depth);
console.log("official function output:", JSON.stringify(flattenDepthResult));
function myFlattenDepth(arr, depth) {
    return arr.reduce((acc, val) => acc.concat(depth > 1 && Array.isArray(val) ? myFlattenDepth(val, depth - 1) : val), []);
}
const myFlattenDepthResult = myFlattenDepth(arr13, depth);
console.log("my function output:", JSON.stringify(myFlattenDepthResult));
console.log("my function is the same as the official function:", _.isEqual(myFlattenDepthResult, flattenDepthResult));
dividingLine("end of flattenDepth test.");
// end of flattenDepth test.

// start of fromPairs test.
const arr14 = [["a", 1], ["b", 2]];
// official lodash fromPairs function
const fromPairsResult = _.fromPairs(arr14);
console.log("official function output:", JSON.stringify(fromPairsResult));
function myFromPairs(arr) {
    return arr.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
}
const myFromPairsResult = myFromPairs(arr14);
console.log("my function output:", JSON.stringify(myFromPairsResult));
console.log("my function is the same as the official function:", _.isEqual(myFromPairsResult, fromPairsResult));
dividingLine("end of fromPairs test.");
// end of fromPairs test.

// start of head test.
// official lodash head function
const headResult = _.head(arr13);
console.log("official function output:", JSON.stringify(headResult));
function myHead(arr) {
    return arr[0];
}
const myHeadResult = myHead(arr13);
console.log("my function output:", JSON.stringify(myHeadResult));
console.log("my function is the same as the official function:", _.isEqual(myHeadResult, headResult));
dividingLine("end of head test.");
// end of head test.

// start of indexOf test.
const arr15 = [1, 2, 1, 2];
const value1 = 2;
const fromIndex = 2;
// official lodash indexOf function
const indexOfResult = _.indexOf(arr15, value1, fromIndex);
console.log("official function output:", JSON.stringify(indexOfResult));
function myIndexOf(arr, value,fromIndex) {
    return arr.indexOf(value, fromIndex);
}
const myIndexOfResult = myIndexOf(arr15, value1,fromIndex);
console.log("my function output:", JSON.stringify(myIndexOfResult));
console.log("my function is the same as the official function:", _.isEqual(myIndexOfResult, indexOfResult));
dividingLine("end of indexOf test.");
// end of indexOf test.

// start of initial test.
// official lodash initial function
const initialResult = _.initial(arr13);
console.log("official function output:", JSON.stringify(initialResult));
function myInitial(arr) {
    return arr.slice(0, -1);
}
const myInitialResult = myInitial(arr13);
console.log("my function output:", JSON.stringify(myInitialResult));
console.log("my function is the same as the official function:", _.isEqual(myInitialResult, initialResult));
dividingLine("end of initial test.");
// end of initial test.

// start of intersection test.
const arr16 = [2, 1];
const arr17 = [2, 3];
// official lodash intersection function
const intersectionResult = _.intersection(arr16, arr17);
console.log("official function output:", JSON.stringify(intersectionResult));

// start of intersectionBy test.
const arr18 = [2.1, 1.2];
const arr19 = [2.3, 3.4];
// official lodash intersectionBy function
const intersectionByResult = _.intersectionBy(arr18, arr19, Math.floor);
console.log("official function output:", JSON.stringify(intersectionByResult));
function myIntersectionBy(arr1, arr2, fn) {
    return arr1.filter(val => arr2.map(fn).includes(fn(val)));
}
const myIntersectionByResult = myIntersectionBy(arr18, arr19, Math.floor);
console.log("my function output:", JSON.stringify(myIntersectionByResult));
console.log("my function is the same as the official function:", _.isEqual(myIntersectionByResult, intersectionByResult));
dividingLine("end of intersectionBy test.");
// end of intersectionBy test.

// start of intersectionWith test.
const arr20 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
const arr21 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
// official lodash intersectionWith function
const intersectionWithResult = _.intersectionWith(arr20, arr21, _.isEqual);
console.log("official function output:", JSON.stringify(intersectionWithResult));
function myIntersectionWith(arr1, arr2, comparator) {
    return arr1.filter(val1 => arr2.some(val2 => comparator(val1, val2)));
}
const myIntersectionWithResult = myIntersectionWith(arr20, arr21, _.isEqual);
console.log("my function output:", JSON.stringify(myIntersectionWithResult));
console.log("my function is the same as the official function:", _.isEqual(myIntersectionWithResult, intersectionWithResult));
dividingLine("end of intersectionWith test.");
// end of intersectionWith test.

// start of join test.
const arr22 = ["a", "b", "c"];
const separator = "-";
// official lodash join function
const joinResult = _.join(arr22, separator);
console.log("official function output:", JSON.stringify(joinResult));
function myJoin(arr, separator) {
    return arr.reduce((acc, val) => acc + separator + val);
}
const myJoinResult = myJoin(arr22, separator);
console.log("my function output:", JSON.stringify(myJoinResult));
console.log("my function is the same as the official function:", _.isEqual(myJoinResult, joinResult));
dividingLine("end of join test.");
// end of join test.

