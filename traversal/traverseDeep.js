const {
    isObject,
    isArray
} = require('../validation/isDataType.js')

// depth-first-traversal
function traverseDeep(parentNode, cb) {
    const stack = Object.keys(parentNode)

    while (stack.length) {
        let nodeKey = stack.pop()
        let node = parentNode[nodeKey]

        if (cb(nodeKey, node)) {
            return { match: true, nodeKey, node }
        }

        if (isObject(node) || isArray(node)) {
            let result = traverseDeep(node, cb)

            if (result.match) {
                return result
            }
        }
    }

    return { match: false }
}

module.exports = traverseDeep
