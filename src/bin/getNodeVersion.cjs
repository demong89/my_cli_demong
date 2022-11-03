const semver = require('semver')
const minNodeVersion = '12.0.1'
const getVersion = ()=>{
  const nodeVersion = semver.valid(semver.coerce(process.version))
  return semver.satisfies(nodeVersion,'>='+minNodeVersion)
}
module.exports = getVersion
