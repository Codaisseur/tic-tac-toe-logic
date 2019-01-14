const { calculateWinner } = require('./calculate-winner')

const gameIsTie = (board) => noEmptyCellsOnBoard(board) && calculateWinner(board) === null

const noEmptyCellsOnBoard = (board) => board.every(noEmptyCellsOnRow)

const noEmptyCellsOnRow = (row) => row.every(cell => cell !== null)

module.exports = {
    gameIsTie
}