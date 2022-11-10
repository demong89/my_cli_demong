// #!/usr/bin/env node
// const  {program} = require('commander')
import { Command } from "commander";
import {startServer} from './../lib/start/startServer.cjs'
import {buildServer} from './../lib/build/buildServer.js'
const program = new Command();

export const getCommader = () => {
  program
    .option("--first")
    .option("-s, --separator <char>")
    .option("create, --create <char>");

// 说明命令是create  创建项目
  if(process.argv.length>2&&process.argv[2] === 'create'){
    return 'create'
  }

  // 注册一个启动命令
  program.command('start').allowUnknownOption().action(startServer)
  program.command('build').allowUnknownOption().action(buildServer)


  program.parse();

  const options = program.opts();
  console.log(options);
  return options
};
