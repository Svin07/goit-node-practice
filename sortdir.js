const path = require("path");
const fs = require("fs/promises");
let dirBasePath = null;

function getBasePath(filePath) {
  const basePath = path.join(__dirname, filePath);
  dirBasePath = basePath;
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
        handleFile(itemPath);
      } else {
        sortDir(itemPath);
      }
    });
  } catch (error) {
    console.log("sortdir error ->", error.message);
  }
}

const fileGroups = {
  IMAGES: ["JPEG", "PNG", "JPG", "SVG"],
  VIDEO: ["AVI", "MP4", "MOV", "MKV"],
  DOCUMENTS: ["DOC", "DOCX", "TXT", "PDF", "XLSX", "PPTX"],
  MUSIC: ["MP3", "OGG", "WAV", "AMR"],
  ARCHIVES: ["ZIP", "GZ", "TAR"],
  UNDEFINED: [],
};

async function handleFile(filePath) {
  const fileExt = path.extname(filePath).slice(1).toUpperCase();
  const dirBaseList = await fs.readdir(dirBasePath);

  for (const group in fileGroups) {
    if (fileGroups[group].includes(fileExt)) {
      if (!dirBaseList.includes(group)) {
        await fs.mkdir(path.join(dirBasePath, group));
      }
      await fs.rename(filePath,)
    }

    if (group === "UNDEFINED") {
      if (!dirBaseList.includes(group)) {
        await fs.mkdir(path.join(dirBasePath, group));
      }
      console.log("move to undefined");
    }


  }
}
module.exports = { sortDir, getBasePath };
