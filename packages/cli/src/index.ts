#! /usr/bin/env node
import interpreter from "bhai-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";


console.info(chalk.hex('#83aaff')(`
██████╗░██╗░░██╗░█████╗░██╗██╗░░░░░░█████╗░███╗░░██╗░██████╗░
██╔══██╗██║░░██║██╔══██╗██║██║░░░░░██╔══██╗████╗░██║██╔════╝░
██████╦╝███████║███████║██║██║░░░░░███████║██╔██╗██║██║░░██╗░
██╔══██╗██╔══██║██╔══██║██║██║░░░░░██╔══██║██║╚████║██║░░╚██╗
██████╦╝██║░░██║██║░░██║██║███████╗██║░░██║██║░╚███║╚██████╔╝
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

https://github.com/DullLabs/bhai-lang
`));

const filePath = yargs(hideBin(process.argv))
  .command('<filepath>', 'Interpret the contents of the specified file and print it to stdout', () => { }, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .argv._[0];

  
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
  interpreter.interpret(data);
})


