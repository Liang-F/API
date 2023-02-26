exports.errResult = ({ code = 0, data = null, message = null } = {}) => {
  return {
    status: code,
    data: data,
    message: `请求失败:${message}`
  }
}
exports.successResult = ({ code = 1, data = [], message = '请求成功' } = {}) => {
  return {
    status: code,
    data: data,
    message: message
  }
}