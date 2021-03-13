import chalk from 'chalk'

type LogType = {
  info: (str: string) => void
}
export const log: LogType = {} as any

log.info = (str: string) => {
  console.log(
    chalk.blue(str)
  )
}
