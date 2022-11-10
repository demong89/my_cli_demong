#!/usr/bin/env node

import figlet from "figlet";
import clear from "clear";
import chalkAnimation from "chalk-animation";

import {getCommader} from './commander.js'
import {create} from './create.js'
import getVersion from './getNodeVersion.cjs'
import {logWarning} from './../utils/index.js'





clear(); // 清屏
const cliName = figlet.textSync("my_cli");
const neon = chalkAnimation.neon(cliName);


setTimeout(() => {
  neon.stop(); // Animation stops
  const commader = getCommader()
  if(commader==='create'){
    create();
  }
  const isMatchVersion = getVersion()
  if(!isMatchVersion){
    logWarning('您的node版本有点低，请升级到14及以上版本！')
    return
  }
  
 
}, 1000);








