function includesEvery({ requiredValues, actualValues }) {
  return requiredValues.every(requiredVal => {
    return actualValues.includes(requiredVal)
  })
}

module.exports = includesEvery
