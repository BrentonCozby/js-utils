function includesOneOf({ requiredValues, actualValues }) {
  return requiredValues.some(requiredVal => {
    return actualValues.includes(requiredVal)
  })
}

module.exports = includesOneOf
