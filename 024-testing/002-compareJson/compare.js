const fs = require('fs');

const readJsonFile = (fileName) => {
  const content = fs.readFileSync(fileName, 'utf-8');
  try {
    const jsonData = JSON.parse(content);
    return jsonData;
  } catch (error) {
    console.error(`read Json file error ${JSON.stringify(error)}`);
  }
};

const isDataInArray = (data, jsonArray) => jsonArray.some((item) => {
  if (Object.keys(item).length !== Object.keys(data).length) {
    return false;
  }
  return !Object.keys(item).some(key => item[key] !== data[key]);
});

const compareJsonArray = (jsonArray1, jsonArray2) => {
  console.log('1 not in 2\n\n');
  jsonArray1.forEach((item) => {
    if (!isDataInArray(item, jsonArray2)) {
      console.log(JSON.stringify(item));
    }
  });
  console.log('2 not in 1\n\n');
  jsonArray2.forEach((item) => {
    if (!isDataInArray(item, jsonArray1)) {
      console.log(JSON.stringify(item));
    }
  });
};
const main = () => {
  const file1 = 'C:\\Users\\lisalu.REDMOND\\source\\exercise-book\\024-testing\\002-compareJson\\winhp-markets.json';
  const json1 = readJsonFile(file1);
  const json2 = readJsonFile('C:\\Users\\lisalu.REDMOND\\source\\msnews-experiences\\configs\\prod\\edgeChromium\\CommonSettingsEdgeNext\\default\\config.json');
  compareJsonArray(json1, json2.properties.markets);
};
main();
