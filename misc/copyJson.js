function copyJson(data) {
    if (data === undefined) {
        return undefined
    }

    return JSON.parse(JSON.stringify(data))
}

module.exports = copyJson
