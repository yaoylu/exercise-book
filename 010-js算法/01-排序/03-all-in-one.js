
console.clear();
class Timer {
  constructor(name) {
    this.timer = new Date();
    this.name = name;
  }
  start() {
    this.timer = new Date();
  }
  stop() {
    const now = new Date();
    console.log(this.timer.getTime(), now.getTime());
    const interval = now.getTime() - this.timer.getTime();
    console.log(`${this.name} 耗时：${interval}`);
  }
}
function swap(arr, left, right) {
  const tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
}
function bubble(arr) {
  console.time('bubble耗时');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.timeEnd('bubble耗时');
  return arr;
}
// 测试
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

;
console.log(bubble([...arr]));


function selectionSort(arr) {
  const len = arr.length;
  let minIndex; let temp;
  console.time('选择排序耗时');
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                 // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}
console.log(selectionSort([...arr]));  ;

function insertionSort(array) {
  console.time('插入排序耗时：');
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
  console.timeEnd('插入排序耗时：');
  return array;
}
console.log(insertionSort([...arr]));
console.log(arr.length);
function shellSort(arr) {
  const len = arr.length;
  let temp;
  let gap = 1;
  console.time('希尔排序耗时:');
  while (gap < len / 5) {          // 动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      let j;
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  console.timeEnd('希尔排序耗时:');
  return arr;
}

console.log(shellSort([...arr]));


function mergeSort(arr) {  // 采用自上而下的递归方法
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}
console.time('归并排序耗时');
console.log(mergeSort([...arr]));
console.timeEnd('归并排序耗时');

function quickSort(array, left, right) {
  if (left < right) {
    const x = array[right];
    let i = left - 1;

    for (let j = left; j <= right; j++) {
      if (array[j] <= x) {
        i += 1;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);
  }


  return array;
}
console.time('1.快速排序耗时');
console.log(quickSort([...arr], 0, arr.length - 1));
console.timeEnd('1.快速排序耗时');

function myQuickSort(arr, left, right) {
  if (left < right) {
    const x = arr[right];
    let i = left - 1;
    for (let j = left;j <= right;j++) {
      if (arr[j] <= x) {
        i += 1;
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
    console.timeLog('my.快速排序耗时');
    myQuickSort(arr, left, i - 1);
    myQuickSort(arr, i + 1, right);
  }

  return arr;
}
console.time('my.快速排序耗时');
console.log(myQuickSort([...arr], 0, arr.length - 1));
console.timeEnd('my.快速排序耗时');
