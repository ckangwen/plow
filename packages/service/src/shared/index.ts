import { resolve } from 'path'

export const success = (data: unknown, msg = 'OK') => {
  return {
    code: 200,
    msg,
    data
  }
}

export const error = (data: unknown, msg = 'Error') => {
  return {
    code: 500,
    msg,
    data
  }
}

export const __DEV__ = process.env.NODE_ENV !== 'production'

export const createResolveVueAliasFactory = (viewPath: string) => {
  return function resolveVueAlias (path: string) {
    // @/component
    if (path.charAt(0) === '@') {
      const _path = path.substring(1)
      return resolve(viewPath, `./src${_path}`)
    }
    // ./component
    if (path.charAt(0) === '.' || (path.charAt(0) === '.' && path.charAt(1) === '.')) {
      return resolve(viewPath, path)
    }
    // c://components
    return path
  }
}

export const ViewRootDevPath = 'C:\\all\\code\\cli\\fast-admin-view\\fast-admin-view-default'

export const getPackageName = (packageName: string) => {
  if (packageName.startsWith('@')) {
    const lastIndex = packageName.lastIndexOf('/')
    return packageName.slice(lastIndex + 1)
  }
  return packageName
}
