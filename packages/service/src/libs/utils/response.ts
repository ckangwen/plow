export const success = (data: any, msg = 'OK') => {
  return {
    code: 200,
    msg,
    data
  }
}

export const error = (data: any, msg = 'Error') => {
  return {
    code: 500,
    msg,
    data
  }
}
