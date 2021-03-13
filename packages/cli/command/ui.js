const fs = require('fs')
const Path = require('path')
const childProcess = require("child_process")
const viewTemplateDir = 'C:/all/code/cli/fast-admin-view/fast-admin-view-default'
const service = require("C:/all/code/cli/plow/packages/service/dist")


function exec (cmd, loc) {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (stdout) {
        console.log(stdout)
      }
      if (stderr) {
        console.error(stderr)
      }
      return (err ? rej(err) : res())
    })
  })
}

async function ui() {
  const cwd = process.cwd()
  await startView()
  await startService()
}

const startService = () => {
  service.run()
}

const startView = async  () => {
  const res = fs.existsSync(viewTemplateDir)
  console.log(res)
  await exec('npm run dev', viewTemplateDir)

}

module.exports = ui