
import inquirer from "inquirer";
import clone from "./../utils/clone.js";
import { compile } from "./../utils/compile.js";
import { log } from "./../utils/index.js";

const opttions = {
  Vue: "vue",
  React: "react",
  退出: "quit",
};
const question = [
  {
    type: "rawlist" /* 选择框 */,
    message: "请选择要使用的框架？",
    name: "frame",
    choices: Object.keys(opttions),
  },
];

export const create = async()=>{
    const answer = await inquirer.prompt(question);
    // console.log(`你的选择是：${answer.frame}`);
    if (answer.frame === "退出") return;
    await next(answer.frame);
}

async function next(frame) {
  const frameName = frame.toLowerCase();
  let { name } = await inquirer.prompt([
    {
      type: "input" /* 选择框 */,
      message: "请输入项目的名称？",
      name: "name",
    },
  ]);
  if (!name) name = `${frameName}_projects`;

  log("开始创建项目:" + name);

  // 下载项目
  await clone(`github:demong89/${frameName}-template`, name);

  // 修改package.json项目名称
  compile(`${frameName}-template`, name, `./${name}/package.json`);

  log(
    `
      👌 安装完成：
      To get Start:
      ===========================
      cd ${name}
      ${gen(frameName)}
      ===========================
    `
  );
}

function gen(frameName) {
  if (frameName === "vue") {
    return `
      npm i
      npm run dev
    `;
  } else {
    return `
      npm start 
    `;
  }
}
