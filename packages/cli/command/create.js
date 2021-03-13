const Path = require("path")
const fsExtra = require("fs-extra")
const rimraf = require("rimraf")
const { prompt } = require('enquirer')
const { spawn } = require("cross-spawn")
const execa = require('execa')
const EventEmitter = require('events')
const log = require("../libs/log")
const { hasYarn } = require("../libs/env")


const templateToProject = {
  'vue-element-admin': 'fast-admin-view-default'
}

class InstallProgress extends EventEmitter {
  constructor () {
    super()

    this._progress = -1
  }

  get progress () {
    return this._progress
  }

  set progress (value) {
    this._progress = value
    this.emit('progress', value)
  }

  get enabled () {
    return this._progress !== -1
  }

  set enabled (value) {
    this.progress = value ? 0 : -1
  }

  log (value) {
    this.emit('log', value)
  }
}

function renderProgressBar (curr, total) {
  const ratio = Math.min(Math.max(curr / total, 0), 1)
  const bar = ` ${curr}/${total}`
  const availableSpace = Math.max(0, process.stderr.columns - bar.length - 3)
  const width = Math.min(total, availableSpace)
  const completeLength = Math.round(width * ratio)
  const complete = `#`.repeat(completeLength)
  const incomplete = `-`.repeat(width - completeLength)
  toStartOfLine(process.stderr)
  process.stderr.write(`[${complete}${incomplete}]${bar}`)
}

const progress = new InstallProgress()

async function create(projectName) {
  let projectPath = Path.join(process.cwd(), projectName)
  if (fsExtra.existsSync(projectPath)) {
    log.info(`${projectName}文件夹已存在`)
    return
  }
  const { template } = await prompt({
    type: 'select',
    name: 'template',
    message: '请选择项目模板',
    choices: [
      'vue-element-admin',
    ]
  })
  fsExtra.mkdirSync(projectPath)

  const depositoryName = templateToProject[template]
  await cloneDepository(depositoryName, projectPath)

  // await installDependencies(projectPath)
}


async function cloneDepository(depositoryName, cwd) {
  const depositoryLink = `https://github.com.cnpmjs.org/ckangwen/${depositoryName}.git`
  return new Promise((resolve, reject) => {
    log.info('>>> start install depository');

    const child = spawn('git', ['clone', depositoryLink], {
      stdio: ['pipe'],
      cwd,
    });

    child.stdout.on('data', data => {
      console.log(data.toString());
    });

    child.stderr.on('data', data => {
      console.log(data.toString());
    });

    child.on('error', error => {
      reject(error);
    });

    child.on('close', (code) => {
      if (code === 0) {
        log.info('>>> depository install completed');
        fsExtra.copySync(
          Path.join(cwd, depositoryName),
          cwd
        )
        fsExtra.removeSync(Path.resolve(cwd, depositoryName))
        fsExtra.removeSync(Path.resolve(cwd, '.git'))
        spawn('git', ['init'], {
          stdio: ['pipe'],
          cwd,
        });
        resolve();
      } else {
        reject(new Error('depository install error'));
      }
    });
  });
}

function installDependencies(cwd) {
  return new Promise((resolve, reject) => {
    progress.enabled = false

    log.info('>>> start install dependencies');
    const command = hasYarn() ? 'yarn' : 'npm'

    const child = execa('yarn', ['install'], {
      stdio: ['inherit','pipe'],
      cwd,
    });
    child.stdout.on('data', buffer => {
      process.stdout.write(buffer)
    })

    child.on('error', error => {
      reject(error);
    });

    child.on('close', (code) => {
      if (code === 0) {
        log.success('>>> dependencies install completed');
        resolve();
      } else {
        reject(new Error('install dependencies error'));
      }
    });
  });
}

module.exports = create
