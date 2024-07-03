// leetcode 36 有效的数独
// 1. 9*9的数独
// 2. 每一行每一列每一个3*3的九宫格内都没有重复的数字
// 3. 数独部分空格用'.'表示
// 4. 判断数独是否有效
// 5. 数独只包含数字1-9和'.'
// 示例
// 输入：
// 输入：board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

const { set } = require("lodash");

// 输出：true
var isValidSudoku = function (board) {
    function isValidRow(board, i) {
        const set = new Set();
        for (let j = 0; j < 9; j++) {
            if (set.has(board[i][j])) {
                return false;
            }
            if (board[i][j] !== ".") {
                set.add(board[i][j]);
            }
        }
        return true;
    }
    function isValidCol(board, j) {
        const set = new Set();
        for (let i = 0; i < 9; i++) {
            if (set.has(board[i][j])) {
                return false;
            }
            if (board[i][j] !== ".") {
                set.add(board[i][j]);
            }
        }
        return true;
    }
    function isValidBox(board, startRow, startCol) {
        const set = new Set();
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (set.has(board[i][j])) {
                    return false;
                }
                if (board[i][j] !== ".") {
                    set.add(board[i][j]);
                }
            }
        }
        return true;
    }
    for(let i = 0; i < 9; i++) {
        if (!isValidRow(board, i) || !isValidCol(board, i) || !isValidBox(board, 3 * Math.floor(i / 3), 3 * (i % 3))) {
            return false;
        }
    }
    return true;

};
const board =
[["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board));

// leetcode 141 环形链表
// 1. 给定一个链表，判断链表中是否有环
// 2. 用O(1)的空间复杂度
// 3. 用O(n)的时间复杂度
// 示例
// 输入: head = [3,2,0,-4], pos = 1

var hasCycle = function (head) {
    let cur = head;
    while (cur) {
        if(cur.flag) {
            return true;
        } else {
            cur.flag = true;
            cur = cur.next;
        }
    }
    return false;
};

const node1 = {
    val: 3,
    next: null
};
const node2 = {
    val: 2,
    next: null
};
const node3 = {
    val: 0,
    next: null
};
const node4 = {
    val: -4,
    next: null
};
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hasCycle(node1));

// leetcode 49 字母异位词分组
// 1. 给定一个字符串数组，将字母异位词组合在一起
// 2. 字母异位词指字母相同，但排列不同的字符串
// 3. 返回字母异位词分组后的结果
// 示例
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [["ate","eat","tea"],["nat","tan"],["bat"]]

var groupAnagrams = function (strs) {
    const map = new Map();
    for (const str of strs) {
        const array = Array.from(str);
        array.sort();
        const key = array.toString();
        const list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};
console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])));

// leetcode 13 罗马数字转整数
// 1. 罗马数字包含以下七种字符：I，V，X，L，C，D和M
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 给定一个罗马数字，将其转换成整数
// 示例：
// 输入: "III"
// 输出: 3
// 输入: "IV"
// 输出: 4
// 输入: "IX"
// 输出: 9
// 输入: "LVIII"
// 输出: 58
// 输入: "MCMXCIV"
// 输出: 1994

var romanToInt = function (s) {
    const map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    map.set("IV", 4);
    map.set("IX", 9);
    map.set("XL", 40);
    map.set("XC", 90);
    map.set("CD", 400);
    map.set("CM", 900);
    let res = 0;

    for(let i = 0; i < s.length; i++) {
        if(i + 1 < s.length && map.has(s[i] + s[i + 1])) {
            res += map.get(s[i] + s[i + 1]);
            i++;
        }else{
            res += map.get(s[i]);
        }

    }
    return res;
};
console.log(romanToInt("LVIII"));

// leetcode 30 串联所有单词的子串
// 1. 给定一个字符串s和一些长度相同的单词words
// 2. 找出s中恰好可以由words中所有单词串联形成的子串的起始位置
// 3. 注意子串要与words中单词完全匹配，中间不能有其他字符
// 4. 返回所有起始位置
// 示例
// 输入：s = "barfoothefoobarman", words = ["foo","bar"]
// 输出：[0,9]

var findSubstring = function (s, words) {
    function getAllOrder(list) {
        if(list.length === 1) {
            return [list];
        }
        const res = [];
        const startList = [];
        for(let i = 0; i < list.length; i++) {
            if(startList.indexOf(list[i]) !== -1) {
                continue;
            }
            startList.push(list[i]);
            const rest = list.toSpliced(i, 1);
            const orders = getAllOrder(rest);
            res.push(...orders.map((order)=>{
                order.unshift(list[i]);
                return order;
            }));
        }
        return res;
    }
    const res = [];
    const orders = getAllOrder(words);
    for(let i = 0; i < orders.length; i++) {
        const subStr = orders[i].join("");
        let index = s.indexOf(subStr, 0);
        while(index !== -1) {
            res.push(index);
            index = s.indexOf(subStr, index + 1);
        }
    }
    return res;
};
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));

var findSubstring2 = function (s, words) {
    const findIndexs = (s, word) => {
        const indexs = [];
        let index = s.indexOf(word);
        while(index !== -1) {
            indexs.push(index);
            index = s.indexOf(word, index + 1);
        }
        return indexs;
    };
    const map = {};
    let indexs = [];
    for(const word of words) {
        map[word] = map[word] ? map[word] : findIndexs(s, word);
        if (map[word].length === 0) {
            return [];
        }
        indexs.push(...map[word]);
    }
    const set = new Set(indexs);
    indexs = Array.from(set);
    indexs.sort((a, b)=>a - b);

    const res = [];
    const len = words.length;
    const wordLen = words[0].length;
    for(let i = 0; i < indexs.length; i++) {
        let count = 0;
        wordsCopy = words.slice();
        let last = i;
        for(let j = i; j < indexs.length; j++) {
            if(j > last && indexs[j] - indexs[last] !== wordLen) {
                continue;
            }
            last = j;
            const cur = s.substring(indexs[j], indexs[j] + wordLen);
            const wordIndex = wordsCopy.indexOf(cur);
            if(wordIndex !== -1) {
                count++;
                wordsCopy.splice(wordIndex, 1);
                if(count === len) {
                    res.push(indexs[i]);
                    break;
                }
            } else{
                break;
            }
        }
    }

    return res;
};
// const s="pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel";
// const words = ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"];
// console.log(findSubstring2(s,words));
const s2 = "barfoothefoobarman";
const words2 = ["foo", "bar"];
console.log(findSubstring2(s2, words2));

// 思路
// 1. 遍历字符串s，每次取words中所有单词长度的字符串
// 2. 判断该字符串是否在words中，如果在则加入结果数组
// 3. 如果不在，则继续遍历
// 4. 返回结果数组
// /**
var findSubstring3 = function (s, words) {
    const res = [];
    const wordLen = words[0].length;
    const len = words.length;
    const totalLen = wordLen * len;
    const map = {};
    for(const word of words) {
        map[word] = map[word] ? map[word] + 1 : 1;
    }
    for(let i = 0; i <= s.length - totalLen; i++) {
        const temp = {};
        let j = 0;
        for(;j < len; j++) {
            const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
            if(map[word]) {
                temp[word] = temp[word] ? temp[word] + 1 : 1;
                if(temp[word] > map[word]) {
                    break;
                }
            } else{
                break;
            }
        }
        if(j === len) {
            res.push(i);
        }
    }
    return res;
};