/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-21 17:10:43
 * @LastEditors: alysalu(alysalu@tencent.com)
 */


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const invertTree = function (root) {
  if (!root) return root;
  const {
    left,
    right,
  } = root;
  root.right = invertTree(left);
  root.left = invertTree(right);;
  return root;
};

const isSymmetric = function (root) {
  if (!root) return true;
  const {
    left,
    right,
  } = root;

  function compare2(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return compare2(left.left, right.right) && compare2(left.right, right.left);
  }
  return compare2(left, right);
};
const diameterOfBinaryTree = function (root) {
  let ans = 0;

  function getMaxSingleDistance(node) {
    if (!node) return 0;
    const maxLeft = 1 + getMaxSingleDistance(node.left);
    const maxRight = 1 + getMaxSingleDistance(node.right);
    return Math.max(maxLeft, maxRight);
  }

  function getMaxBoth(node) {
    if (!node) return 0;
    const dis = getMaxSingleDistance(node.left) + getMaxSingleDistance(node.right);
    ans = Math.max(dis, ans);
    getMaxBoth(node.left);
    getMaxBoth(node.right);
  }
  getMaxBoth(root);
  return ans;
};

const widthOfBinaryTree = function (root) {
  const queue = [
    [root, 1, 1],
  ];
  let ans = 0;
  let minIndex = 1;
  let maxIndex = 1;
  let currentLevel = 1;
  let offsetIndex = 0;
  while (queue.length > 0) {
    const [node, level, index] = queue.shift();

    if (!node) continue;
    if (currentLevel !== level) {
      currentLevel = level;
      minIndex = index;
      offsetIndex = index - 1;
    }
    queue.push([node.left, level + 1, 2 * (index - offsetIndex) - 1]);
    queue.push([node.right, level + 1, 2 * (index - offsetIndex)]);

    maxIndex = index;
    ans = Math.max(ans, maxIndex - minIndex + 1);
  }
  return ans;
};


function createTreeNode(arr) {
  if (arr.length === 0) return null;
  const val = arr.shift();
  const root = new TreeNode(val, null, null);
  const queue = [];
  queue.push(root);
  while (arr.length > 0 && queue.length > 0) {
    const node = queue.shift();
    if (node.val === null) continue;
    const leftVal = arr.shift();
    const rightVal = arr.shift();
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal, null, null);
      queue.push(node.left);
    }
    if (rightVal !== null) {
      node.right = new TreeNode(rightVal, null, null);
      queue.push(node.right);
    };
  }
  return root;
}
const tetsRoot = createTreeNode([4, 1, 2, null, null, 5, 3]);
console.log(widthOfBinaryTree(tetsRoot));


const flipMatchVoyage = function (root, voyage) {
  const ans = [];
  let i = 0;

  function dfs(node) {
    if (!node) return true;
    const val = voyage[i++];
    if (node.val !== val) return false;
    if (node.left && node.left.val !== voyage[i]) {
      ans.push(val);
      return dfs(node.right) && dfs(node.left);
    }
    return dfs(node.left) && dfs(node.right);
  }
  return dfs(root) ? ans : [-1];
};
console.log(flipMatchVoyage(createTreeNode([1, 2, 3]), [1, 2, 3]));

// 给你二叉树的根结点 root ，请你设计算法计算二叉树的 垂序遍历 序列。

// 对位于 (row, col) 的每个结点而言，其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1) 。树的根结点位于 (0, 0) 。

// 二叉树的 垂序遍历 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。

// 返回二叉树的 垂序遍历 序列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const verticalTraversal = function (root) {
  const map = {};
  const queue = [];
  queue.push([root, 0, 0]);
  function dfs([node, level, index]) {
    if (!node) return ;
    dfs([node.left, level + 1, index - 1]);
    map[index] ? map[index].push(node.val) : map[index] = [node.val];
    dfs([node.right, level + 1, index + 1]);
  }
  dfs([root, 0, 0]);
  const mapKeys = Object.keys(map);
  mapKeys.sort((a, b) => a - b);
  return mapKeys.map(key => map[key]);
};
console.log(JSON.stringify(verticalTraversal(createTreeNode([3, 9, 20, null, null, 15, 7]))));
