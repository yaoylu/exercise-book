/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-30 15:41:55
 */

function road(arrList, m, n) {
  const ans = 0;
  dp[i][j] = x + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]);
}
const arrList = [[1, 1, 4, 3],
  [2, 2, 3, 2],
  [5, 6, 7, 1],
  [8, 4, 2, 1],
  [1, 1, 1, 1]];
console.log(road(arrList));


function sameTree(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 && node2) return false;
  if (!node2 && node1) return false;
  if (node1.val === node2.val) {
    return (sameTree(node1.left, node2.right) && sameTree(node1.right, node2.left))
            || (sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right));
  }
  return false;
}
