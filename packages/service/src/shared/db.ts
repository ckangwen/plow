import Lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
// const FileSync = require('lowdb/adapters/FileSync')
// const Lowdb = require('lowdb')

export const createViewDB = (path: string) => {
  const viewDB = Lowdb(new FileSync(path))
  viewDB.defaults({ routes: {} }).write()
  return viewDB
}
export const createServiceDB = (path = '../../data/db.json') => {
  const serviceDB = Lowdb(new FileSync(path))
  serviceDB.defaults({ packages: {}, templates: {} }).write()
  return serviceDB
}
