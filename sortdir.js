const path = require("path");
const fs = require("fs/promises");

function getBasePath(filePath) {
  const basePath = path.join(__dirname, filePath);
  return basePath;
}

async function sortDir(filePath) {
  // console.log(basePath);
  try {
    const dirList = await fs.readdir(filePath);

    dirList.forEach(async (item) => {
      const itemPath = path.join(filePath, item);
      const stat = await fs.stat(itemPath);
      if (stat.isFile()) {
        console.log("HandleFile>>>");
        // handleFile();
      } else {
        console.log("Handle Dir>>>");
        sortDir(itemPath);
      }
    });
    console.log(dirList);
  } catch (error) {
    console.log("sortdir error ->", error.message);
  }
}

function handleFile(params) {}

module.exports = { sortDir, getBasePath };
