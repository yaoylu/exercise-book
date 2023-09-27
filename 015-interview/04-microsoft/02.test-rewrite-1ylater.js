/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-15 10:03:57
 */

// ['asd','dog','dog','asd','as','as'] =>[dog,]

class ATree {
    constructor() {
        this.root = {};
    }
}

function findDup(arr) {
    if(arr.length === 0) { return arr; }
    const dupList = [];
    const tree = new ATree();
    for (let i = 0; i < arr.length; i++) {
        let p = tree.root;
        const newLetters = arr[i].split("");
        newLetters.push("\n");
        let letter = newLetters.shift();
        let isDup = true;
        while (letter) {
            if(p[letter]) {
                p = p[letter];
            } else {
                p[letter] = {};
                p = p[letter];
                isDup = false;
            }
            letter = newLetters.shift();
        }
        if(isDup) {
            dupList.push(arr[i]);
        }
    }
    return dupList;
}

console.log(findDup(["asd","dog","dog","asd","as","as"]));
