// #!/usr/bin/env node
// const  {program} = require('commander')
import { Command } from "commander";
const program = new Command();

export const getCommader = () => {
  program
    .option("--first")
    .option("-s, --separator <char>")
    .option("create, --create <char>");

  program.parse();

// 说明命令是create  创建项目
  if(process.argv.length>2&&process.argv[2] === 'create'){
    console.log('这是创建的',process.argv[2]);
    return 'create'
  }

  const options = program.opts();
  console.log(options);
};
