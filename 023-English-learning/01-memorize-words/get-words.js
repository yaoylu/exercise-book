const fs = require('fs');
const path = require('path');


const readFileLines = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  return lines;
};

const readTeamsMeetingTranscript = (filePath) => {
  const transcripts = readFileLines(filePath);
  const lines = transcripts.filter((line, i) => !(line.includes('-->') || (i >= 1 && transcripts[i - 1].includes('-->'))));
  return lines;
};

const formatWord = (fakeWord) => {
  const word = fakeWord.toLowerCase().replace(/[\d. "';:]+/g, '');
  return word.length > 1 ? word : '';
};
const getWordsFromSentences = (sentences) => {
  const wordMap = {};
  sentences.forEach((sentence) => {
    const fakeWords = Array.from(sentence.match(/\w+/g) || []);
    fakeWords.forEach((fakeWord) => {
      const word = formatWord(fakeWord);
      if (!word) {
        return;
      }
      wordMap[word] ? wordMap[word] += 1 : wordMap[word] = 1;
    });
  });
  const words = Object.entries(wordMap)
    .sort((a, b) =>  b[1] - a[1])
    .map(([key, value]) => key);
  return words;
};
const outputWords = (words, filePath) => {
  fs.writeFileSync(filePath, words.join('\n'), 'utf-8');
};
const main = () => {
  const fileName = './AllWords.txt';
  const filePath = path.join(__dirname, fileName);
  const lines = readTeamsMeetingTranscript(filePath);
  const words = getWordsFromSentences(lines);
  outputWords(words, path.join(__dirname, 'output.txt'));
  console.log(words);
};
main();

