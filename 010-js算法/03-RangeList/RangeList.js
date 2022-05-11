class RangeList {
  constructor() {
    this.rangeList = [];
  }
  isInteger(obj) {
    return typeof obj === 'number' && obj % 1 === 0;
  }
  /**
   * @description: 检查参数range有效性
   * @param {any} range - Array of two integers that specify beginning and right of range.
   */
  checkRangeValidity(range) {
    if (!(range instanceof Array)) {
      throw new TypeError('param <range> must be Array');
    };

    if (range.length !== 2) {
      throw new RangeError('param <range> can only have 2 elements');
    };

    const [left, right] = range;

    if (!this.isInteger(left) || !this.isInteger(right)) {
      throw new TypeError('the elements of <range> can only be integers');
    };

    if (right < left) {
      throw new RangeError('in param <range>:[left, right] right can not smaller than left');
    };
  }

  /**
   * @description: 区域相加
   * @param {Array<Array<Number>>} ranges 区域列表
   * @return {Array<Number>} 2区间加得到的新区域
   */
  merge(ranges) {
    const rangesLeft = Math.min(...ranges.map(([left]) => left));
    const rangesRight = Math.max(...ranges.map(([, right]) => right));
    return [rangesLeft, rangesRight];
  }

  /**
   * @description: 区域相减
   * @param {Array<number>} minuendRange 被减区域
   * @param {Array<number>} subRange 删减区域
   * @return {Array<Array<Number>>} 2区间相减得到的新区域列表
   */
  subtraction(minuendRange, subRange) {
    const ranges = [
      [minuendRange[0], subRange[0]],
      [subRange[1], minuendRange[1]],
    ];
    return ranges.filter(([left, right]) => right > left);
  }

  /**
   * @description: 找出rangeList中与目标range有相交的区域范围
   * intStartIndex, intEndIndex分别为相交的区域范围在rangeList中起始和结束index。
   * intEndIndex > intStartIndex 存在相交区域
   * intStartIndex === intEndIndex 不相交，且为目标range的插入点
   * @param {Array<Array<Number>>} rangeList 原始区间数组
   * @param {Array<Number>} range 用来对比的range
   * @return {Array<Number>} [intStartIndex, intEndIndex];
   */
  intIndexes(rangeList, range) {
    const [left, right] = range;
    let intStartIndex = 0;
    let intEndIndex = rangeList.length;

    rangeList.forEach((r, i) => {
      const [rLeft, rRight] = r;
      if (rRight < left) {
        const nextIndex = i + 1;
        intStartIndex = nextIndex > intStartIndex ? nextIndex : intStartIndex;
      } else if (rLeft > right) {
        intEndIndex = i < intEndIndex ? i : intEndIndex;
      }
    });

    return [intStartIndex, intEndIndex];
  }

  /**
   * @description: Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and right of range.
   */
  add(range) {
    this.checkRangeValidity(range);
    const [intStartIndex, intEndIndex] = this.intIndexes(this.rangeList, range);

    if (intEndIndex - intStartIndex > 0) {
      // 相交，相交区域与目标range合并成新区域，并删掉原有的相交区域,插入合并区
      const intRanges = this.rangeList.slice(intStartIndex, intEndIndex);
      intRanges.push(range);
      const newRange = this.merge(intRanges);
      this.rangeList.splice(intStartIndex, intEndIndex - intStartIndex, newRange);
    } else {
      // 不相交，直接插入
      this.rangeList.splice(intStartIndex, 0, range);
    }
  }

  /**
   * @description: Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and right of range.
   */
  remove(range) {
    this.checkRangeValidity(range);
    const [intStartIndex, intEndIndex] = this.intIndexes(this.rangeList, range);

    if (intEndIndex - intStartIndex > 0) {
      // 相交, 相交区域合并，减掉目标range, 生成新的newRanges。删掉原有的相交区域，插入newRanges
      const intRanges = this.rangeList.slice(intStartIndex, intEndIndex);
      const minuendRange = this.merge(intRanges);
      const newRanges = this.subtraction(minuendRange, range);
      this.rangeList.splice(intStartIndex, intEndIndex - intStartIndex, ...newRanges);
    }
  }

  /**
   * @description: Prints out the list of ranges in the range list
   */
  print() {
    const msg = this.rangeList.length === 0
      ? 'empty'
      : this.rangeList.map(([left, right]) => `[${left}, ${right})`).join(' ');
    console.log(msg);
  }
}

const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
rl.add([8, 13]);
rl.print();
// Should display: [1, 3) [8, 13) [19, 21)
rl.remove([3, 20]);
rl.print();
// Should display:[1, 3) [20, 21)
rl.remove([1, 21]);
rl.print();
// Should display: empty

rl.add([-12, -2]);
rl.print();
// Should display: [-12, -2)
rl.add([0, 13]);
rl.print();
// Should display: [-12, -2) [0, 13)
rl.add([-14, 8]);
rl.print();
// Should display: [-14, 13)
rl.remove([0, 11]);
rl.print();
// Should display: [-14, 0) [11, 13)

