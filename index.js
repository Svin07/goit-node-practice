const { program } = require("commander");
const { sortDir } = require("./sortdir");

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
      sortDir(path);
      break;

    default:
      break;
  }
}

invokeActions(options);
