// is-valid.js

const symbols = [ 'x', 'o', null ]

const isValidBoard = (board) => board.length === 3 && board.every(isValidRow)

const isValidRow = (row) => row.length === 3 && row.every(isValidSymbol)

const isValidSymbol = (s) => symbols.includes(s)

module.exports = { isValidBoard }