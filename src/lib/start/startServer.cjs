// import { logError } from './../../utils/index.js'
const detectPort = require("detect-port");
const defaultPort = 9001;
const startServer = async () => {
  //  logError('测试错误的')
  try {
    const newPort = await detectPort(defaultPort);
    if (newPort === defaultPort) {
      console.log(`端口号：${defaultPort}可以使用`);
    } else {
      console.log(`端口号：${defaultPort}被占用，建议使用${newPort}`);
    }
  } catch (e) {}
};

module.exports = {
  startServer,
};
