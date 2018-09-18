const decamelize = require('decamelize')

function decamelizeList(list) {
  return list.map(str => decamelize(str))
}

module.exports = decamelizeList
