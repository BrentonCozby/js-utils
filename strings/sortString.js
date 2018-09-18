function compareAsc(a, b) {
  return String(a).toLowerCase().trim().localeCompare(String(b).toLowerCase().trim())
}

function compareDesc(a, b) {
  return String(a).toLowerCase().trim().localeCompare(String(b).toLowerCase().trim())
}

function sortStrings({ list, desc }) {
  return list.sort(desc ? compareDesc : compareAsc)
}

module.exports = sortStrings
