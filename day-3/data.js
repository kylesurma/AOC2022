const fs = require("fs");
const path = require("path");

const data = fs
  .readFileSync(path.resolve(__dirname, "./data.txt"), "utf-8")
  .split("\n")
module.exports = data;
