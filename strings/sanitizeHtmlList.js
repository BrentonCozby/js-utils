const sanitizeHtml = require('sanitize-html')

function sanitizeHtmlList(values, options = {}) {
  return values.map(val => sanitizeHtml(val, options))
}

module.exports = sanitizeHtmlList
