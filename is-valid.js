// is-valid.js

const validSymbols = [ 'x', 'o', null ]

function isValidBoard(rows) {
    return rows.length === 3 && rows.every(rowIsValid)
}

function rowIsValid(cels) {
    return cels.length === 3 && cels.every(symbolIsValid)
}

function symbolIsValid(s) {
    return validSymbols.includes(s)
}

module.exports = { isValidBoard }