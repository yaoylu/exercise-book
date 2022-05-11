/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-07 13:15:09
 */
const convert = (text) => {
  const reg = /‘(?<content>.*)’/g;
  const match  = reg.exec(text);
  const { content } = match.groups;

  return `‘${content.split(' ').reverse()
    .join(' ')}’`;
};
console.log(convert('‘hello word li’'));
