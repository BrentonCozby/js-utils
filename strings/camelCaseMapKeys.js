const camelCase = require('camelcase')

function camelCaseMapKeys(map) {
  if (!map) {
    return map
  }

  return Object.entries(map).reduce((newMap, [key, value]) => {
    newMap[camelCase(key)] = value

    return newMap
  }, {})
}

module.exports = camelCaseMapKeys
