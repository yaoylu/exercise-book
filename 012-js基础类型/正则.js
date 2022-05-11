
console.clear();
const reg = /(?<role>[^:#]+):(?<sentence>[^:#]+)(#(?<translation>.*))?/g;

const { groups: { role, sentence, translation } } = reg.exec('line:fad');
console.log(role, sentence, translation);


const d = 'lines'.replace(reg, (
  matched, // 整个匹配结果 2015-01-02
  capture1, // 第一个组匹配 2015
  capture2, // 第二个组匹配 01
  capture3, // 第三个组匹配 02
  capture4, // 第三个组匹配 02
  position, // 匹配开始的位置 0
  S, // 原字符串 2015-01-02
  groups, // 具名组构成的一个对象 {year, month, day}
) => {
  const { role, sentence, translation } = groups;
  return `${role}/${sentence}/${translation}`;
});

console.log(d);
