function validateRequiredValues({ requiredKeys, valuesMap }) {
  let isValid = true
  let messageMap = {}

  requiredKeys.forEach(key => {
    if (!valuesMap[key]) {
      isValid = false
      messageMap[key] = 'Required'
    }
  })

  return {
    isValid,
    messageMap
  }
}

module.exports = validateRequiredValues
