import chalk from "chalk";

export const log = (...args) => console.log(chalk.green(...args));
export const logError = (...args) => console.log(chalk.red(...args));
export const logWarning = (...args) => console.log(chalk.yellow(...args));




