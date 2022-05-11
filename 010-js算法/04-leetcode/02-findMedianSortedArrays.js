/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-28 14:00:35
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
const findMedianSortedArrays = (arrM, arrN) => {
  const newArray = [...arrM, ...arrN];
  newArray.sort((a, b) => a - b);
  const len = newArray.length;
  if (len % 2 === 0) {
    return (newArray[len / 2] + newArray[(len / 2) - 1]) / 2;
  }
  return newArray[(len - 1) / 2];
};
console.log(findMedianSortedArrays([], []));
