// “ababac” —— “ababa”
// “aaabbbcceeff” —— “aaabbb”

function deleteMinFreqChar(string) {
    const charMap = {};
    Array.from(string).forEach((char) => {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    });

    const minValue = Math.min(...Object.values(charMap));
    const deleteChars = Object.keys(charMap).filter(key => charMap[key] === minValue);
    const remainCharList = Array.from(string).filter(char => deleteChars.indexOf(char) < 0);
    const result =  remainCharList.join('');
    console.log(result);
    return result;
}

const test = () => {
    deleteMinFreqChar('ababac');
    deleteMinFreqChar('aaauyrbbbcceeff');
};
test();
