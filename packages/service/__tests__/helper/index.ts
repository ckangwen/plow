export const wait = function (ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(''), ms))
}
