/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-18 16:42:14
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
const s1 = Symbol('foo');
const s2 = Symbol('foo');
console.log(s1 === s2);
console.log(Symbol.keyFor(s1) === Symbol.keyFor(s2));

class MyClass {
  static [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

console.log('MyClass =>', [1, 2, 3] instanceof  MyClass);

class Even {
  static [Symbol.hasInstance](foo) {
    return foo % 2 === 0;
  }
}
const Even2 = {
  [Symbol.hasInstance](foo) {
    return foo % 2 === 0;
  },

};
console.log('even =>', 2 instanceof Even);
console.log('even2 =>', 2 instanceof Even2);


const arr1 = ['c', 'd'];
const arr2 = ['a', 'b'];
console.log(arr1.concat(arr2, 'e'));
console.log(arr1);
console.log(arr2);
arr1[Symbol.isConcatSpreadable] = false;
console.log(arr1.concat(arr2, 'e'));
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr1.concat(arr2, 'e'));

const obj = { length: 2, 0: 'c', 1: 'd', good: 1 };
console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', 'c', 'd', 'e']
