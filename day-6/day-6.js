const dataString = require("./data");

const chunkTest = (str) => {
  const memo = {};
  str.split("");
  for (let letter of str) {
    if (!memo[letter]) memo[letter] = true;
    else return false;
  }
  return true;
};

const packetFinder = (str, numOfDistinctChar, startingNum = 0) => {
  const testChunk = str.slice(startingNum, startingNum + numOfDistinctChar);
  return chunkTest(testChunk)
    ? startingNum + numOfDistinctChar
    : packetFinder(str, numOfDistinctChar, startingNum + 1);
};

console.log(packetFinder(dataString, 4));
console.log(packetFinder(dataString, 14));
