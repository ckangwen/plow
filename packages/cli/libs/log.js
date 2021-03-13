const chalk = require("chalk")
const log = {}

log.info = (...args) => {
  args = [].concat(args).map(item => chalk.blue(item))
  console.log(...args)
}

log.success = (...args) => {
  args = [].concat(args).map(item => chalk.green(item))
  console.log(...args)
}

log.error = (...args) => {
  args = [].concat(args).map(item => chalk.red(item))
  console.log(...args)
}

module.exports = log
