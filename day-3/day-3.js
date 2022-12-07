const data = require("./data");

const findCommonLetter = (str) => {
  const mid = Math.ceil(str.length / 2);
  const memo = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (i < mid) memo[letter] = true;
    else if (memo[letter]) return letter;
  }
};

const findCommonLetterOfStrings = (...args) => {
  const memo = {};
  const lastWord = args.pop();
  args.forEach(str => {
    memo[str] = {};
    str.split("").forEach((letter) => {
      memo[str][letter] = true;
    });
  });
  for (let i = 0; i < lastWord.length; i++) {
    const letter = lastWord[i];
    if (args.every((string) => memo[string][letter])) return letter;
  }
};

const findValueOfLetter = (letter) => {
  const charCode = letter.charCodeAt(0);
  return charCode - (charCode > 96 ? 96 : 38);
};

const addUpPriorities = (arrayOfStrings) =>
  arrayOfStrings.reduce(
    (total, str) => total + +findValueOfLetter(findCommonLetter(str)),
    0
  );

const priorityCalc = (arrayOfStrings, numberOfStr) => {
  if (!arrayOfStrings.length) return 0;
  return (
    findValueOfLetter(
      findCommonLetterOfStrings(...arrayOfStrings.splice(0, numberOfStr))
    ) + priorityCalc(arrayOfStrings, numberOfStr)
  );
};

// for split single string
console.log(addUpPriorities(data));

// for common letter amongst 3 words (written to support n amount)
console.log(priorityCalc(data, 3));
