import * as babelParser from '@babel/parser'

export class BaseGenerator {
  /**
   * 将字符串代码转换为ast
   */
  codeToAST (str: string) {
    return babelParser.parse(str, { sourceType: 'module' })
  }
}
