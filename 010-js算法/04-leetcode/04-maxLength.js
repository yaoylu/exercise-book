/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-07 12:02:05
 */
const longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length + 1).fill(0)
    .map(() => new Array(text2.length + 1).fill(0));
  let res = 0;
  for (let i = 1;i < text1.length + 1;i++) {
    for (let j = 1;j < text2.length + 1;j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
