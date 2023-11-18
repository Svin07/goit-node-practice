const path = require("path");

function sortDir(filePath) {
  const basePath = path.join(__dirname, filePath);
  console.log(basePath);
}

module.exports = { sortDir };
