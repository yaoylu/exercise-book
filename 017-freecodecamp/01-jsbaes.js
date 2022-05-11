/*
 * @Description:
 * @Author: alysalu(alysalu@tencent.com)
 * @Date: 2022-03-31 15:57:48
 * @LastEditors: alysalu(alysalu@tencent.com)
 */
function sum(arr, n) {
  // 只修改这一行下面的代码
  if (n <= 0) return 0;
  return arr[n - 1] + sum(arr, n - 2);
  // 只修改这一行上面的代码
}
console.log(sum([2, 3, 4, 5], 3));
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // 只修改这一行下面的代码
  for (let i = 0;i < contacts.length;i++) {
    if (contacts[i].name === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      return 'No such property';
    }
  }
  return 'No such contact';
  // 只修改这一行上面的代码
}

console.log(lookUpProfile('Akira', 'likes'));
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// 只修改这一行下面的代码
const half = ({ max, min }) => (max + min) / 2.0;
// 只修改这一行上面的代码
console.log(half(stats));

const sampleWord = 'bana12';
const pwRegex = /(?=\d{2,})/; // 修改这一行
const result = pwRegex.test(sampleWord);
console.log(sampleWord.match(pwRegex));
console.log(result);
const pwRegex2 = /(?=\w{6,})(?=\d{2,})/; // 修改这一行
const result2 = pwRegex2.test(sampleWord);
console.log(result2);
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // 只修改这一行下面的代码
  let count = 0;
  for (const user in usersObj) {
    if (usersObj[user].online) count += 1;
  }
  return count;
  // 只修改这一行上面的代码
}

console.log(countOnline(users));

function Animal() { }
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};

function Dog() { }

// 只修改这一行下面的代码
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = {
  bark() {
    console.log('Woof!');
  },
};


// 只修改这一行上面的代码

// 全局变量
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

function getRating(watchList) {
  // 只修改这一行下面的代码
  const nolans = watchList.filter(item => item.Director === 'Christopher Nolan');
  console.log(nolans);
  const averageRating = nolans.reduce((sum, item) => sum + parseInt(item.imdbRating), 0);


  // 只修改这一行上面的代码
  return averageRating;
}

console.log(getRating(watchList));


function alphabeticalOrder(arr) {
  // 只修改这一行下面的代码
  const b = arr.sort((a, b) => (a > b ? 1 : -1));
  console.log(b);
  return b;
  // 只修改这一行上面的代码
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

function whatIsInAName(collection, source) {
  const arr = [];
  // 只修改这一行下面的代码
  arr.push(...collection.filter(item => Object.keys(source)
    .every(key => item.hasOwnProperty(key) && item[key] === source[key])));

  // 只修改这一行上面的代码
  return arr;
}

const tst = whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
console.log(tst);


const str = 'th-isIsSpinalTap';
console.log(str.split(/(?=[A-Z])|[^a-zA-Z]/));
function translatePigLatin(str) {
  if (str === '') return str;
  const yuan = 'aeiou'.split('');
  if (yuan.indexOf(str[0]) >= 0) {
    return `${str}way`;
  }
  const index = str.split('').findIndex(letter => yuan.indexOf(str[0]) >= 0);
  if (index < 0) {
    return `${str}ay`;
  }
  return `${str.slice(index) + str.slice(0, index)}ay`;
}

console.log(translatePigLatin('consonant'));

function myReplace(str, before, after) {
  if (before[0].toLowerCase() === before[0]) after = after.toLowerCase();
  if (before[0].toUpperCase() === before[0]) after = after[0].toUpperCase() + after.slice(1);
  return str.replace(before, after);
}

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));

function fearNotLetter(str) {
  let res = '';
  const letters = str.split('');
  let offset = letters[0].charCodeAt();
  for (let i = 1;i < letters.length;i++) {
    const currentCode = letters[i].charCodeAt();
    if (offset + i !== currentCode) {
      res += letters[i];
      offset = currentCode - i;
    }
  }
  return res;
}

console.log(fearNotLetter('abce'));
function sumPrimes(num) {
  let sum = 0;
  for (let j = 2;j <= num;j++) {
    let isZhi = true;
    for (let i = 2;i < Math.sqrt(j);i++) {
      if (j % i === 0) {
        isZhi = false;
        break;
      }
    }
    if (isZhi) sum += j;
  }

  return sum;
}

console.log(sumPrimes(10));
function rot13(str) {
  let res = '';
  const maxCode = 'Z'.charCodeAt();
  const minCode = 'A'.charCodeAt();
  for (let i = 0;i < str.length;i++) {
    const p = str[i];
    if (/[A-Z]/.test(p)) {
      const code = p.charCodeAt();
      const newCode = code + 13 > maxCode ? code + 13 - maxCode + minCode - 1 : code + 13;
      res += String.fromCharCode(newCode);
    } else {
      res += p;
    }
  }
  return res;
}

rot13('SERR PBQR PNZC');


function telephoneCheck(str) {
  return /^1?\s*\d{3}[- ]*\d{3}[- ]*\d{4}$|^1?\s*\(\d{3}\)[- ]*\d{3}[- ]*\d{4}$/.test(str);
}
telephoneCheck('555-555-5555');
console.log(telephoneCheck('1 555-555-5555'));

function checkCashRegisterError(price, cash, cid) {
  const cidMap = {};
  cid.forEach(([key, value]) => cidMap[key] = value);
  const changeMap = {};
  let change = cash - price;
  const mianes = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];
  let close = true;
  for (let i = 0;i < mianes.length;i++) {
    const [miane, step] = mianes[i];
    while (change >= step && cidMap[miane] > 0) {
      changeMap[miane] ? changeMap[miane] += step : changeMap[miane] = step;
      change = (Math.round(change * 100) - step * 100) / 100;
      cidMap[miane] = (Math.round(cidMap[miane]) * 100 - step * 100) / 100;;
    }
    if (cidMap[miane] !== 0) close = false;
  }
  let status = 'INSUFFICIENT_FUNDS';
  if (change === 0) {
    if (close) {
      status = 'CLOSED';
      return  { status, change: cid };
    }
    status = 'OPEN';
    return { status, change: Object.entries(changeMap) };
  }
  return   { status, change: [] };
}
function checkCashRegister(price, cash, cid) {
  const mianes = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  const changeMap = [];
  let change = parseFloat((cash - price).toFixed(2));

  let close = true;
  for (let i = cid.length - 1;i >= 0;i--) {
    const [miane, mianeAll] = cid[i];
    let cost = 0;
    if (change >= mianeAll) {
      cost = mianeAll;
    } else {
      const step = mianes[miane];
      const remain = parseFloat((change % step).toFixed(2));
      cost = parseFloat((change - remain).toFixed(2));
    }
    if (cost !== 0)changeMap.push([miane, cost]);
    change = parseFloat((change - cost).toFixed(2));
    const cidRemain =  parseFloat((cid[i][1] - cost).toFixed(2));
    if (cidRemain !== 0) close = false;
  }


  let status = 'INSUFFICIENT_FUNDS';
  if (change === 0) {
    if (close) {
      status = 'CLOSED';
      return  { status, change: cid };
    }
    status = 'OPEN';
    return { status, change: changeMap };
  }
  return   { status, change: [] };
}


const res = checkCashRegister(19.5, 20, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]);
// const res = checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]);
console.log(JSON.stringify(res));

function palindrome(str) {
  const pureStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = pureStr.length - 1;

  while (left < right) {
    if (pureStr[left] !== pureStr[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

palindrome('eye');
function convertToRoman(num) {
  let ans = '';
  while (num >= 1000) {
    ans += 'M';
    num -= 1000;
  }
  if (num >= 900) {
    ans += 'CM';
    num -= 900;
  }
  if (num >= 500) {
    ans += 'D';
    num -= 500;
  }
  if (num >= 400) {
    ans += 'CD';
    num -= 400;
  }
  while (num >= 100) {
    ans += 'C';
    num -= 100;
  }
  if (num >= 90) {
    ans += 'XC';
    num -= 90;
  }
  if (num >= 50) {
    ans += 'L';
    num -= 50;
  }
  if (num >= 40) {
    ans += 'XL';
    num -= 40;
  }
  while (num >= 10) {
    ans += 'X';
    num -= 10;
  }
  if (num >= 9) {
    ans += 'IX';
    num -= 9;
  }
  if (num >= 5) {
    ans += 'V';
    num -= 5;
  }
  if (num >= 4) {
    ans += 'IV';
    num -= 4;
  }
  while (num >= 1) {
    ans += 'I';
    num -= 1;
  }
  return ans;
}

convertToRoman(36);


