// calculate-winner.js

function calculateWinner_notClean(rows) {
    const winningRow = rows.find(allSymbolsAreTheSameButNotNull)
    if (winningRow) {
        return winningRow[0]
    }
    const columns = getColumns(rows)
    const winningColumn = columns.find(allSymbolsAreTheSameButNotNull)
    if (winningColumn) {
        return winningColumn[0]
    }
    const diagonals = getDiagonals(rows)
    const winningDiagonal = diagonals.find(allSymbolsAreTheSameButNotNull)
    if (winningDiagonal) {
        return winningDiagonal[0]
    }
    return null
}

function calculateWinner_noDuplication(rows) {
    const allDirections = rows.concat(getColumns(rows)).concat(getDiagonals(rows))
    const winningDirection = allDirections.find(allSymbolsAreTheSameButNotNull)
    if (winningDirection) {
        return winningDirection[0]
    }
    return null
}


function getColumns(rows) {
    return [
        [rows[0][0], rows[1][0], rows[2][0]],
        [rows[0][1], rows[1][1], rows[2][1]],
        [rows[0][2], rows[1][2], rows[2][2]],
    ]
}

function getDiagonals(rows) {
    return [
        [rows[0][0], rows[1][1], rows[2][2]],
        [rows[0][2], rows[1][1], rows[2][0]],
    ]
}

function allSymbolsAreTheSameButNotNull(symbols) {
    const first = symbols[0]
    return symbols.every(s => s === first && s !== null)
}

module.exports = {
    calculateWinner: calculateWinner_noDuplication
}