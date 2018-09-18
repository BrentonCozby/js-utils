const {
    isObject,
    isArray
} = require('../validation/isDataType.js')

// breadth-first-traversal
function traverseWide(parentNode, cb) {
    const queue = Object.entries(parentNode)

    while (queue.length) {
        let [nodeKey, node] = queue.shift()

        if (cb(nodeKey, node)) {
            return { match: true, nodeKey, node }
        }

        if (isObject(node) || isArray(node)) {
            Object.entries(node).forEach(n => queue.push(n))
        }
    }

    return { match: false }
}

module.exports = traverseWide
