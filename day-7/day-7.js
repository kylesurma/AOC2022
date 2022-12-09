const root = require("./data");

const getAndCalcDirSizes = (root) => {
  const arrayOfSizes = [];
  const getTotalFilesPerDir = (root) => {
    if (root.type === "file") return root.fileSize;
    if (root.type === "dir") {
      let value = 0;
      for (let i = 0; i < root.items.length; i++) {
        value += getTotalFilesPerDir(root.items[i]);
      }
      arrayOfSizes.push(value);
      return value;
    }
  };
  getTotalFilesPerDir(root);

  const arrayOfSizesSorted = arrayOfSizes.sort((a, b) => b - a);
  const availableSpace = 70000000 - arrayOfSizesSorted[0];
  const spaceNeeded = 30000000 - availableSpace;

  const findThePerfectDir = (array, spaceNeeded) => {
    for (let i = 0; i < array.length; i++) {
      const size = array[i];
      if (size < spaceNeeded) return array[i - 1];
    }
  };

  console.log(findThePerfectDir(arrayOfSizesSorted, spaceNeeded));

  return arrayOfSizes.filter((key) => key < 100000).reduce((a, c) => a + c, 0);
};

console.log(getAndCalcDirSizes(root));
