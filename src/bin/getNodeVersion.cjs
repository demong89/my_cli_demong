const semver = require('semver')


const getVersion = ()=>{
  console.log('commonjs 模块');
  return semver.valid('1.2.3')
}


module.exports = getVersion
