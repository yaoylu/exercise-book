/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-15 10:03:57
 */

// ['asd','dog','dog','asd','as','as'] =>[dog,]

class Node {
  constructor(val) {
    this.val = val;
    this.num = 1;
    this.next = {};
  }
}
class ATree {
  constructor() {
    this.root = new Node('');
  }
  add(string) {
    let p = this.root;
    let letter = string.shift();
    while (letter) {
      p.next[letter] ? p.next[letter].num++ : p.next[letter] = new Node(letter);
      p = p.next[letter];
      letter = this.string.shift();
    }
  }
  getTree() {
    return this.root;
  }
  getValues() {
    const ans = [];
    function find(node, stack) {
      stack.push(node.val);
      if (Object.keys(node.next) === 0 && node.num > 1) {
        ans.push(stack);
        return;
      }
      for (const key of node.next) {
        find(node.next[key], [...stack]);
      }
    }
    find(this.root, []);
    return ans;
  }
}


function getSub(arr) {
  if (arr.length === 0) return arr;
  const tree = new ATree();
  for (let i = 0;i < arr.length;i++) {
    tree.add(arr[i]);
  }
  return tree.getValues();
}
