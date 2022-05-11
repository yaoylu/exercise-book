/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-02-22 17:27:33
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function checkArray(array) {
  if (!array || array.length <= 2) return;
}

function swap(array, left, right) {
  const rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}

function log() {
  console.log('first');
}


function abc(str) {
  alert(str);
}
// export { checkArray, swap };
