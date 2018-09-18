function stringIncludes({ searchFor, within }) {
  return within.trim().toLowerCase().includes(searchFor.trim().toLowerCase())
}

module.exports = stringIncludes
