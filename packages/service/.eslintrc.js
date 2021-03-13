module.exports = {
  root: true, // 设为根层，不会再往上寻找
  parser: '@typescript-eslint/parser', // 默认为esprima，你可以指定为babel(babel-eslint)
  parserOptions: {
    sourceType: 'module' // 如果你有es6模块的话，就设为module
  },
  env: {
    browser: true, // 启用环境为browser和node js
    node: true
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: { // 设定规则0为关闭，1为警告，2直接出错，也可用英文设定off or warn or error
    'arrow-parens': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
