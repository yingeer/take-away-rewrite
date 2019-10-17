export default function requireComponents (files) {
  // directory：说明需要检索的目录
  // useSubdirectories：是否检索子目录
  // regExp: 匹配文件的正则表达式,一般是文件名
  const path = require('path')
  // const files = require.context(directory, useSubdirectories, regExp)
  const modules = {}
  files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
  })
  return modules
}
