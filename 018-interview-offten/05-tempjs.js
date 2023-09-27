
function nums(a, b) {
    if
    (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return;
    a + b;
}


console.log(nums(4, 2));
console.log(nums(1, 2));
function captureOne(re, str) {
    const match = re.exec(str);
    return match && match[1];
}

const numRe = /num=(\d+)/gi;
const wordRe = /word=(\w+)/i;
const a1 = captureOne(numRe, 'num=1');
const a2 = captureOne(wordRe, 'word=1');
const a3 = captureOne(numRe, 'NUM=1');
const a4 = captureOne(wordRe, 'WORD=1');

[a1 === a2, a3 === a4];

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);


class Person {
    constructor() {
        this.name = 'Lydia';
    }
}

Person = class AnotherPerson {
    constructor() {
        this.name = 'Sarah';
    }
};

const member = new Person();
console.log(member.name);
async function getData() {
    return await Promise.resolve('I made it!');
}
async function main() {
    const data = await getData();
    console.log(data);
}
main();
