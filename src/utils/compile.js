import fs from "fs";
import handlebars from "handlebars";
import { log } from "./index.js";
export function compile(templateName, name, filePath) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath).toString();
    // console.log("名称:", templateName, name);
    const result = content.replaceAll(templateName, name);
    // console.log(result);
    fs.writeFileSync(filePath, result);
    log(`📚 ${filePath} 修改成功`);
  } else {
    log(`❌ ${filePath} 修改失败`);
  }
}
