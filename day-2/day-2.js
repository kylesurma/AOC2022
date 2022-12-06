const data = require("./data");

const scoreCard = {
  X: { A: 4, B: 1, C: 7 },
  Y: { A: 8, B: 5, C: 2 },
  Z: { A: 3, B: 9, C: 6 },
};

const scoreCardLookLegit = {
  X: { A: 3, B: 1, C: 2 },
  Y: { A: 4, B: 5, C: 6 },
  Z: { A: 8, B: 9, C: 7 },
};

const totalScore = (data, decrypter) => data.reduce((a, c) => a + decrypter[c[1]][c[0]], 0)

console.log(totalScore(data, scoreCard))
console.log(totalScore(data, scoreCardLookLegit))