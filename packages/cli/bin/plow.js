#! /usr/bin/env node
const { Command } = require('commander');
const commander = new Command();
const Path = require('path')
const fs = require('fs')
const { prompt } = require('enquirer')
const version = require('../package.json').version
const ui = require('../command/ui');
const chalk = require('chalk');
const log = require('../libs/log');
const create = require('../command/create');
commander.version(version)

const isDirEmpty = (filepath) => {
  const files = fs.readdirSync(filepath)
  return files.length === 0
}

commander
  .command('create <projectName>')
  .action(async (projectName) => {
    create(projectName)
  })


  commander
  .command('ui')
  .description('启动UI界面')
  .action(async () => {
    const cwd = process.cwd()
    if (cwd && isDirEmpty(cwd)) {
      const { select } = await prompt({
        type: 'select',
        name: 'select',
        message: '是否在此目录创建项目',
        choices: [
          'Y',
          'N'
        ]
      })
      if (select === 'Y') {
        console.log('start')
        return
      }
      return
    }

    const tempFile = Path.join(cwd, '.settings')
    if (!fs.existsSync(tempFile)) {
      console.log(
        chalk.blue('当前目录没有fast-admin的配置文件')
      )
    } else {
      ui()
    }
  })

  commander
  .command('package <package>')
  .description('下载组件包')
  .action(() => {
  })

  commander
  .command('template <template>')
  .description('下载组件模板')
  .action(() => {
  })

commander.parse(process.argv);