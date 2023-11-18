const { program } = require("commander");
const { sortDir, getBasePath } = require("./sortdir");

program
  .option("-f, --first <type>")
  .option("-a, --action <type>")
  .option("-p, --path <type>");

program.parse();

const options = program.opts();

console.log(options);

function invokeActions({ action, path, ...options }) {
  switch (action) {
    case "sort":
      const basePath = getBasePath(path);
      sortDir(basePath);
      break;

    default:
      break;
  }
}

invokeActions(options);
