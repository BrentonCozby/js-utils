function to(promise, logError) {
    return promise
    .then(data => [null, data])
    .catch(err => {
        if (logError) {
            console.error(err)
        }

        return [err]
    })
}

module.exports = to
