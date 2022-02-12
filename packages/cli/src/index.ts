#! /usr/bin/env node
import interpreter from "bhai-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

console.info(
  chalk.hex("#83aaff")(`
██████╗░██╗░░██╗░█████╗░██╗██╗░░░░░░█████╗░███╗░░██╗░██████╗░
██╔══██╗██║░░██║██╔══██╗██║██║░░░░░██╔══██╗████╗░██║██╔════╝░
██████╦╝███████║███████║██║██║░░░░░███████║██╔██╗██║██║░░██╗░
██╔══██╗██╔══██║██╔══██║██║██║░░░░░██╔══██║██║╚████║██║░░╚██╗
██████╦╝██║░░██║██║░░██║██║███████╗██║░░██║██║░╚███║╚██████╔╝
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

https://github.com/DulLabs/bhai-lang
`)
);

const cl = console.log;

console.log = function (...args) {
  const newArgs = args.map((arg) => {
    return `${chalk.hex("#83aaff")(">  ")}${chalk.greenBright(arg)}`;
  });
  cl.apply(console, newArgs);
};

const filePath = yargs(hideBin(process.argv))
  .command(
    "<filepath>",
    "Interpret the contents of the specified file and print it to stdout",
    () => {},
    (argv) => {
      console.info(argv);
    }
  )
  .demandCommand(1).argv._[0];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    interpreter.interpret(data);
  } catch (ex) {
    if (ex instanceof Error) {
      console.error("\n", chalk.redBright(ex.stack));
    }
  }
});
