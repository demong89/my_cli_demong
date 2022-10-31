// #!/usr/bin/env node
// const  {program} = require('commander')
import { Command } from 'commander';
const program = new Command();


export const getCommader = ()=>{
  program.option('--first').option('-s, --separator <char>')

  program.parse()
  
  const options = program.opts()
  console.log(options);
  
}


