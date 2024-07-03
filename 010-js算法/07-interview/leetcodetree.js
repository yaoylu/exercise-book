// leetcode 94 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 示例 1：
// 输入：root = [1,null,2,3]

const { result, startCase } = require("lodash");

// 输出：[1,3,2]
var inorderTraversal = function(root) {
    const result = [];
    const inorder = function (node) {
        if(!node) {
            return;
        }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    };
    inorder(root);
    return result;
};
let root = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
};
console.log(inorderTraversal(root));

// leetcode 83 删除排序链表中的重复元素
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 示例 1：
// 输入：head = [1,1,2]
// 输出：[1,2]

var deleteDuplicates = function(head) {
    let pre = head;
    let p;
    while(pre) {
        p = pre.next;
        if(p && p.val === pre.val) {
            pre.next = p.next;
        }else{
            pre = pre.next;
        }
    }
    return head;
};
root = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1
        }
    }
};
console.log(JSON.stringify(deleteDuplicates(root))); // [1,2]

// leetcode 98 验证二叉搜索树
// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 示例 1：
// 输入：[2,1,3]
// 输出：true

var isValidBST = function(root) {
    const inorder = function(node) {
        if(!node) {
            return true;
        }
        if(!inorder(node.left)) {
            return false;
        }
        if(node.val <= pre) {
            return false;
        }
        pre = node.val;
        return inorder(node.right);
    };
    let pre = -Infinity;
    return inorder(root);
};
// [5,1,4,null,null,3,6]
root = {
    val: 2,
    left: {
        val: 1
    },
    right: {
        val: 4,
        left: {
            val: 3
        },
        right: {
            val: 6
        }
    }
};
console.log(isValidBST(root)); // false

// leetcode 100 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 示例 1：
// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true

var isSameTree = function(p, q) {
    if(!q && !p) {
        return true;
    }
    if(!p || !p) {
        return false;
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
let p = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3
    }
};
let q = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3
    }
};
console.log("is same tree:", isSameTree(p, q)); // true

// leetcode 101 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
// 示例 1：
// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    const _isSymmetric = function (left, right) {
        if(!left && !right) {
            return true;
        }
        if(!left || !right) {
            return false;
        }
        return left.val == right.val && _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left);
    };

    return _isSymmetric(root.left, root.right);
};
root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 3
        }
    }
};
console.log("is symmetric:", isSymmetric(root)); // true

// leetcode 102 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。
// 示例：
// 输入：[3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

var levelOrder = function(root) {
    const result = [];
    if(!root) {
        return result;
    }
    const queue = [root];
    while(queue.length) {
        const currentLevelSize = queue.length;
        if(currentLevelSize) {

            result.push([]);
        }
        for(let i = 0; i < currentLevelSize; i++) {
            const cur = queue.shift();
            result[result.length - 1].push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
    }
    return result;
};
root = {
    val: 3,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};
console.log(JSON.stringify(levelOrder(root))); // [[3],[9,20],[15,7]]

// leetcode 103  二叉树的锯齿形层序遍历
// 给定一个二叉树，返回其节点值的锯齿形层序遍历。
// （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）
// 示例：
// 输入：[3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]

var zigzagLevelOrder = function(root) {
    const result = [];
    if(!root) {
        return result;
    }
    const queue = [root];
    let fromLeft = false;
    while(queue.length) {
        const currentLevelSize = queue.length;
        fromLeft = !fromLeft;
        if(currentLevelSize) {
            result.push([]);
        }
        for(let i = 0; i < currentLevelSize; i++) {
            const cur = fromLeft ? queue.shift() : queue.pop();
            result[result.length - 1].push(cur.val);
            if(fromLeft) {
                cur.left && queue.push(cur.left);
                cur.right && queue.push(cur.right);
            }else{
                cur.right && queue.unshift(cur.right);
                cur.left && queue.unshift(cur.left);
            }

        }
    }
    return result;
};
root = {
    val: 3,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};
console.log(JSON.stringify(zigzagLevelOrder(root))); // [[3],[20,9],[15,7]]

// leetcode 105 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 注意:
// 你可以假设树中没有重复的元素。
// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

var buildTree = function(preorder, inorder) {
    const build = function(preorder, inorder) {
        if(preorder.length === 0) {
            return null;
        }
        const rootVal = preorder[0];
        const root = {
            val: rootVal
        };
        let i = 0;
        for(; i < inorder.length; i++) {
            if(inorder[i] === rootVal) {
                break;
            }
        }
        root.left = build(preorder.slice(1, i + 1), inorder.slice(0, i));
        root.right = build(preorder.slice(i + 1), inorder.slice(i + 1));
        return root;
    };
    return build(preorder, inorder);
};
preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(preorder, inorder))); // [3,9,20,null,null,15,7]

// leetcode 144 二叉树的前序遍历
// 给你二叉树节点root, 返回它的前序遍历
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]

var preorderTraversal = function(root) {
    const result = [];
    const inorder = function(node) {
        if(!node) {
            return;
        }
        result.push(node.val);
        inorder(node.left);
        inorder(node.right);
    };
    inorder(root);
    return result;
};
root = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
};
console.log(JSON.stringify(preorderTraversal(root))); // [1,2,3]

// leetcode 145 二叉树的后序遍历
// 给你二叉树节点root, 返回它的后序遍历
// 示例 1：
// 输入：root = [1,null,2,3]
// 输出：[3,2,1]
var postorderTraversal = function(root) {
    const result = [];
    const inorder = function(node) {
        if(!node) {
            return;
        }
        inorder(node.left);
        inorder(node.right);
        result.push(node.val);
    };
    inorder(root);
    return result;
};
root = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
};
console.log(JSON.stringify(postorderTraversal(root))); // [3,2,1]

// leetcode 226 翻转二叉树
// 翻转一棵二叉树。
// 示例：
// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
    if(!root) {
        return root;
    }
    const p = root.left;
    root.left = root.right;
    root.right = p;
    invertTree(root.left);
    invertTree(root.right);
    return root;

};
root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1
        },
        right: {
            val: 3
        }
    },
    right: {
        val: 7,
        left: {
            val: 6
        },
        right: {
            val: 9
        }
    }
};
console.log("invert tree:", JSON.stringify(invertTree(root)));

// leetcode 114 二叉树展开为链表
// 给定一个二叉树，原地将它展开为一个单链表。
// 例如，给定二叉树
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// 将其展开为：
// 1
// \
//  2
//   \
//    3
//     \
//      4
//       \
//        5
//         \
//          6

var flatten = function(root) {
    if(!root) {
        return root;
    }
    const tmpRight = flatten(root.right);
    root.right = flatten(root.left);
    root.left = null;
    let p = root;
    while(p.right) {
        p = p.right;
    }
    p.right = tmpRight;
    return root;
};
root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 5,
        right: {
            val: 6
        }
    }
};
console.log("flatten:", JSON.stringify(flatten(root)));

// leetcode 124 二叉树中的最大路径和
// 给定一个非空二叉树，返回其最大路径和。
// 本题中，路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
// 该路径至少包含一个节点，且不一定经过根节点。
// 示例 1：
// 输入：[1,2,3]
// 输出：6
// 解释：最大路径和为 2 -> 1 -> 3

var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const dfs = function(node) {
        if(!node) {
            return 0;
        }
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        maxSum = Math.max(maxSum, left + right + node.val);
        return Math.max(left, right) + node.val;
    };
    dfs(root);
    return maxSum;
};
// [-10,9,20,null,null,15,7]
root = {
    val: -10,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};
console.log("max path sum:", maxPathSum(root)); // 6
root = {
    val: -10,
    left: {
        val: 9
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
};
console.log("max path sum:", maxPathSum(root)); // 42

// leetcode 236 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 最近公共祖先的定义为：对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）
// 示例 1：
// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3

var lowestCommonAncestor = function(root, p, q) {
    const dfs = function(node, p, q) {
        if(!node || node == p || node == q) {
            return node;
        }
        const left = dfs(node.left, p, q);
        const right = dfs(node.right, p, q);
        if(left && right) {
            return node;
        }
        return left ? left : right;
    };
    return dfs(root, p, q);
};
root = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6
        },
        right: {
            val: 2,
            left: {
                val: 7
            },
            right: {
                val: 4
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0
        },
        right: {
            val: 8
        }
    }
};
p = root.left;
q = root.right;
console.log("lowest common ancestor:", JSON.stringify(lowestCommonAncestor(root, p, q))); // 3

// leetcode 297 二叉树的序列化与反序列化
// 请设计一个算法来实现二叉树的序列化与反序列化。

var serialize = function(root) {
    const result = [];
    const inorder = function(node) {
        if(!node) {
            result.push("null");
            return;
        }
        result.push(node.val);
        inorder(node.left);
        inorder(node.right);
    };
    inorder(root);
    return result;
};
var deserialize = function(data) {
    const inorder = function() {
        if(!data.length) {
            return null;
        }
        const val = data.shift();
        if(val === "null") {
            return null;
        }
        const node = {
            val: val
        };
        node.left = inorder();
        node.right = inorder();
        return node;
    };
    return inorder();
};
root = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    }
};
const data = serialize(root);
console.log("serialize:", data); // [1,2,3,null,null,4,5]
console.log("deserialize:", JSON.stringify(deserialize(data))); // [1,2,3,null,null,4,5]

// leetcode 96 不同的二叉搜索树
// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
// 示例 1：
// 输入：3
// 输出：5
var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    // dp[i]表示i个节点组成的二叉搜索树的个数
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            // j作为顶点， 左子树有j - 1个节点，右子树有i - j个节点
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
console.log(numTrees(3)); // 5

// leetcode 95 不同的二叉搜索树 II
// 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
// 示例 1：
// 输入：3
// 输出：[[1,null,3,2],[3,2,null,1],[3,1,null,null,2],[2,1,3],[1,null,2,null,3]]

var generateTrees = function(n) {
    const generate = function(start, end) {
        const result = [];
        if(start > end) {
            result.push(null);
            return result;
        }
        start = start || 1;
        end = end || n;
        for(let i = start; i <= end; i++) {
            const left = generate(start, i - 1);
            const right = generate(i + 1, end);
            for(const l of left) {
                for(const r of right) {
                    const root = {
                        val: i,
                        left: l,
                        right: r
                    };
                    result.push(root);
                }
            }
        }
        return result;
    };
    return generate();
};
console.log(JSON.stringify(generateTrees(3)));

// leetcode 99 恢复二叉搜索树
// 二叉搜索树中的两个节点被错误地交换。
// 请在不改变其结构的情况下，恢复这棵树。
// 示例 1：
// 输入：[1,3,null,null,2]
// 输出：[3,1,null,null,2]

var recoverTree = function(root) {
    let lastWrongNode = root;
    let firstWrongNode = root;
    let pre = {
        val: -Infinity
    };
    const inorder = function(node) {
        if(!node) {
            return;
        }
        inorder(node.left);
        if(pre.val > node.val) {
            lastWrongNode = node;
            if(firstWrongNode === root) {
                firstWrongNode = pre;
            }
        }
        pre = node;
        inorder(node.right);
    };
    inorder(root);
    const tmp = firstWrongNode.val;
    firstWrongNode.val = lastWrongNode.val;
    lastWrongNode.val = tmp;
    return root;
};
root = {
    val: 1,
    left: {
        val: 3,
        right: {
            val: 2
        }
    }
};
console.log("recover tree:", JSON.stringify(recoverTree(root)));

// leetcode 108 将有序数组转换为二叉搜索树
// 给定一个整数数组 nums ，其中元素已经按升序排列，
// 请将其转换为一棵高度平衡二叉搜索树。
// 高度平衡二叉树是一棵满足下述条件的二叉树：
// 任意节点的左右子树的高度差不超过 1 。
// 示例 1：
// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

var sortedArrayToBST = function(nums) {
    const generate = function(nums) {
        const n = nums.length;
        if(n === 0) {
            return null;
        }
        if(n === 1) {
            return{
                val: nums[0],
                left: null,
                right: null
            };
        }
        const mid = Math.floor(n / 2);
        return {
            val: nums[mid],
            left: generate(nums.slice(0, mid)),
            right: generate(nums.slice(mid + 1))
        };
    };
    return generate(nums);
};
console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]))); // [0,-3,9,-10,null,5]

// leetcode 109 有序链表转换二叉搜索树
// 给你一个单链表的头节点 head ，请你构建一个高度平衡的二叉搜索树
// 使得该树中序遍历结果与链表元素顺序相同。
// 示例 1：
// 输入：head = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

var sortedListToBST = function(head) {
    const build = function(head, tail) {
        if(head === tail) {
            return null;
        }
        let slow = head;
        let fast = head;
        while(fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }
        const root = {
            val: slow.val
        };
        root.left = build(head, slow);
        root.right = build(slow.next, tail);
        return root;
    };
    return build(head, null);
};
root = {
    val: -10,
    next: {
        val: -3,
        next: {
            val: 0,
            next: {
                val: 5,
                next: {
                    val: 9,
                    next: null
                }
            }
        }
    }
};
console.log(JSON.stringify(sortedListToBST(root))); // [0,-3,9,-10,null,5]

// leetcode 148 排序链表
// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
// 示例 1：
// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]

// 归并排序: 递归法

var sortList = function(head) {
    const merge = function(head1, head2) {
        // 合并两个有序链表
        const dummyHead = {
            next: null
        };
        let p = dummyHead;
        let p1 = head1;
        let p2 = head2;
        while(p1 && p2) {
            if(p1.val < p2.val) {
                p.next = p1;
                p1 = p1.next;
            }else{
                p.next = p2;
                p2 = p2.next;
            }
            p = p.next;
        }
        if(p1) {
            p.next = p1;
        }
        if(p2) {
            p.next = p2;
        }
        return dummyHead.next;
    };

    // split the linked list into two lists
    const getMid = function(head) {
        let slow = head;
        let fast = head;
        let pre = head;
        while(fast && fast.next) {
            pre = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        pre.next = null;
        return slow;
    };
    if(!head || !head.next) {
        return head;
    }
    const mid = getMid(head);
    return merge(sortList(head), sortList(mid));
};

root = {
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3
            }
        }
    }
};
console.log(JSON.stringify(sortList(root))); // [1,2,3,4]

// leetcode 206 反转链表
// 反转一个单链表。
// 示例：
// 输入：1->2->3->4->5->NULL
// 输出：5->4->3->2->1->NULL
// 迭代法: 从前往后遍历链表，将当前节点的next指针指向前一个节点
var reverseList = function(head) {
    let pre = null;
    let p = head;
    while(p) {
        const c = p;
        p = p.next;
        c.next = pre;
        pre = c;
    }
    return pre;
};
root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
};
console.log(JSON.stringify(reverseList(root))); // [5,4,3,2,1]

// leetcode 92 反转链表 II
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。
// 示例：
// 输入：1->2->3->4->5->NULL, m = 2, n = 4
// 输出：1->4->3->2->5->NULL

var reverseBetween = function(head, m, n) {
    if(!head) {
        return null;
    }
    const dummy = { next: head };
    let preNode = dummy;
    for(let i = 1; i < m; i++) {
        preNode = preNode.next;
    }
    let current = preNode.next;
    const mNode = current;
    let pre = null;
    for(let i = m; i <= n; i++) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }

    preNode.next = pre;
    mNode.next = current;
    return dummy.next;

};
root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
};
console.log(JSON.stringify(reverseBetween(root, 1, 5))); // [1,4,3,2,5]

// leetcode 25 K 个一组翻转链表
// 给你一个链表，每k个节点一组进行翻转，请你返回翻转后的链表。
// k是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是k的整数倍，那么请将最后剩余的节点保持原有顺序。
// 示例：
// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]

var reverseKGroup = function(head, k) {
    const reverse = function(head, tail) {
        let pre = null;
        let p = head;
        const next = tail.next;
        while(p !== next) {
            const c = p;
            p = p.next;
            c.next = pre;
            pre = c;
        }
        return pre;
    };

    const dummy = { next: head };
    let pre = dummy;
    let end = dummy;
    while(end.next) {
        for(let i = 0; i < k && end; i++) {
            end = end.next;
        }
        if(!end) {
            break;
        }
        const next = end.next;
        const start = pre.next;
        end.next = null;
        pre.next = reverse(start, end);
        start.next = next;
        pre = start;
        end = start;
    }
    return dummy.next;
};
root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
};
console.log(JSON.stringify(reverseKGroup(root, 2))); // [2,1,4,3,5]