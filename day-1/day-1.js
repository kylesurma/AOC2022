const data = require("./data");

dataNumbered = data.map(Number);

const totalOfTopX = (data, topNum) =>
  data
    .reduce(
      (a, c, i) => {
        let [totaledCounts, currentCount] = a;
        if (c) currentCount += c;
        if (!c || i === data.length - 1) {
          totaledCounts.push(currentCount);
          currentCount = 0;
        }
        return [totaledCounts, currentCount];
      },
      [[], 0]
    )[0]
    .sort((a, b) => a - b)
    .slice(-topNum)
    .reduce((a, c) => a + c);

console.log(totalOfTopX(dataNumbered, 1));
console.log(totalOfTopX(dataNumbered, 3));
