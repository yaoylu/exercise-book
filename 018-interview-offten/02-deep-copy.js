/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-04-14 14:37:27
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function deepCopy(obj, map = new WeakMap()) {
  const mapTag = '[object Map]';
  const setTag = '[object Set]';
  const arrayTag = '[object Array]';
  const objectTag = '[object Object]';
  const argsTag = '[object Arguments]';

  const boolTag = '[object Boolean]';
  const dateTag = '[object Date]';
  const errorTag = '[object Error]';
  const numberTag = '[object Number]';
  const regexpTag = '[object RegExp]';
  const stringTag = '[object String]';
  const symbolTag = '[object Symbol]';
  const funcTag = '[object Function]';
  const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

  function copyReg(target) {
    const reFlags = /\w*$/;
    const newObj = new RegExp(target.source, reFlags.exec(target));
    return newObj;
  }
  function copySymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
  }
  function copyFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
        if (param) {
          const paramArr = param[0].split(',');
          return new Function(...paramArr, body[0]);
        }
        return new Function(body[0]);
      }
      return null;
    }
    return eval(funcString);
  }
  function copyOtherType(target) {
    const Ctor = target.constructor;
    switch (type) {
      case boolTag:
      case numberTag:
      case stringTag:
      case errorTag:
      case dateTag:
        return new Ctor(target);
      case regexpTag:
        return copyReg(target);
      case symbolTag:
        return copySymbol(target);
      case funcTag:
        return copyFunction(target);
      default:
        return null;
    }
  }
  function initObj(target) {
    const Ctor = target.constructor;
    return new Ctor();
  }
  if (obj === null || typeof obj !== 'object') return obj;
  if (map.get(obj)) return map.get(obj);

  const type = Object.prototype.toString.call(obj);

  let newObj;
  if (deepTag.includes(type)) {
    newObj = initObj(obj);
  } else {
    return copyOtherType(obj);
  }
  map.set(obj, newObj);

  if (type === setTag) {
    obj.forEach((value) => {
      newObj.add(deepCopy(value, map));
    });
  } else if (type === mapTag) {
    obj.forEach((value, key) => {
      newObj.set(key, deepCopy(value));
    });
  } else {
    Object.keys(obj).forEach((key) => {
      newObj[key] = deepCopy(obj[key], map);
    });
  }


  return newObj;
}

const obj1 = {
  a: [1, 2, 3],
  b: {
    b1: [1],
    b2: {
      b21: 1,
    },
  },
  c() {
    return 1;
  },
  d: new Date(),
  e: new RegExp('abc'),
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
};
target.target = target;
const copy = deepCopy(obj1);

copy.a[1] = 32;
copy.c = function () {
  return 'copy';
};
copy.d = new Date();

console.log(JSON.stringify(obj1), obj1.c(), 'abcd'.match(obj1.e));

console.log(JSON.stringify(copy), copy.c(), 'abcd'.match(copy.e));
const targetCopy = deepCopy(target);
console.log(targetCopy);
