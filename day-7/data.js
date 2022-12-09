const fs = require("fs");
const path = require("path");
let count = 0
const data = fs
  .readFileSync(path.resolve(__dirname, "./data.txt"), "utf-8")
  .split("\n");

data.shift();

class Node {
  constructor(type, name, parentNode) {
    this.type = type;
    this.name = name;
    this.items = type === "dir" ? [] : null;
    this.parentNode = parentNode;
    this.fileSize = null;
  }

  setItems(node) {
    this.items.push(node);
  }
  setFileSize(fileSize) {
    this.fileSize = +fileSize;
  }
}

const root = new Node("dir", "root", null);
let curPos = root

data.forEach((cmd) => {
  const [first, second, third] = cmd.split(" ");

  if (first === "$") {
    if (third === "..") {
      const parent = curPos.parentNode
      curPos = parent;
    } else if (third) { // third === [dirName]
      const dir = curPos.items.find((node) => node.name === third);
      curPos = dir
    }
  } else {
    if (first === "dir") {
      const newDir = new Node("dir", second, curPos);
      curPos.setItems(newDir);
    } else { // first === [fileSize]
        count += +first
      const newFile = new Node("file", second, curPos);
      newFile.setFileSize(first);
      curPos.setItems(newFile);
    }
  }
});

console.log({count})

module.exports = root;
