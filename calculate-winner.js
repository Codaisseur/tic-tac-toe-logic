// calculate-winner.js

const calculateWinner = (board) => rowWinnerBoard(board) || columnWinnerBoard(board) || diagonalWinner(board)

const rowWinnerBoard = (board) => board.map(rowWinner).find(winner => winner !== null) || null

const rowWinner = (row) => row.reduce(winningSymbol)

const winningSymbol = (winSymbol, symbol) => winSymbol === symbol ? symbol : null

const onTheSide = (board) => [0, 1, 2].map(n => board.map(row => row[n]))

const columnWinnerBoard = (board) => rowWinnerBoard(onTheSide(board))

const diagonalWinner = (board) => [0, 1, 2].map(n => board[n][n]).reduce(winningSymbol) || [0, 1, 2].map(n => board[2-n][n]).reduce(winningSymbol)

module.exports = {
    calculateWinner
}