
const fs = require('fs-extra')
const childProcess = require('child_process')
const path = require('path')

function remove (loc) {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return (err ? rej(err) : res())
    })
  })
}

function copy (src, dest) {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, (err) => {
      return (err ? rej(err) : res())
    })
  })
}

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


(async () => {
  try {
    const rootPath = path.resolve(__dirname, '../')
    await exec('vue-cli-service build', rootPath)

    const distPath = path.resolve(__dirname, '../dist')
    const publicPath = path.resolve(__dirname, '../../service/public')
    const viewPath = path.resolve(__dirname, '../../service/src/views')
    await remove(publicPath)
    await copy(distPath, publicPath)
    await remove(viewPath)
    await copy(path.resolve(distPath, './index.html'), path.resolve(viewPath, './index.html'))
    console.log('文件移动成功')
  } catch (err) {
    console.error(err)
  }
})()