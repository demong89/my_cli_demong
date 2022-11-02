#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";

import {getCommader} from './commander.js'
import {create} from './create.js'
import getVersion from './getNodeVersion.cjs'





clear(); // 清屏
const cliName = figlet.textSync("my_cli");
const neon = chalkAnimation.neon(cliName);


setTimeout(() => {
  neon.stop(); // Animation stops
  const commader = getCommader()
  if(commader==='create'){
    create();
  }
  getVersion()
 
}, 1000);








