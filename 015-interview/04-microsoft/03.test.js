// 输入整数 [27,32 25 60]
// 输出整数数组,表示再过几项后面的熟比当前项大[1,2,1,0]

function findNextBigger(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let j = i+1;
        for(j = i+1;j<arr.length;j++) {
            if(arr[j] > arr[i]) {
                result.push(j-i);
                break;
            }
        }

        if(j>=arr.length) {
            result.push(0);
        }
    }
    return result;
}
function findNextBigger2(arr) {
    const result = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            const j = stack.pop();
            result[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        result[j] = 0;
    }

    return result;
}
console.log(findNextBigger2([27,32, 25, 60]));