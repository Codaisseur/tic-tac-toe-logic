const isValidTransition = (from, to) => pastMovesRemain(from, to) && turnIsRespected(to) && changeCount(from, to) === 1

const pastMovesRemain = (from, to) => from.every((fromRow, i) => pastMoveRemainsInRow(fromRow, to[i]))

const pastMoveRemainsInRow = (fromRow, toRow) => fromRow.every((symbol, i) => symbol === null || symbol === toRow[i])

const changeCount = (from, to) => from.map((fromRow, i) => changeCountRow(fromRow, to[i])).reduce(sumReducer)

const changeCountRow = (fromRow, toRow) => fromRow.map((symbol, i) => symbol === toRow[i] ? 0 : 1).reduce(sumReducer)

const turnIsRespected = (board) => isBetween(count(board, 'x') - count(board, 'o'), 0, 1)

const isBetween = (num, minInclusive, maxInclusive) => num >= minInclusive && num <= maxInclusive

const count = (board, target) => board.map(row => row.filter(symbol => symbol === target).length).reduce(sumReducer)

const sumReducer = (sum, count) => sum + count

module.exports = {isValidTransition, turnIsRespected, changeCount}
