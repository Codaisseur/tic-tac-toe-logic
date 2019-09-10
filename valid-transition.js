function isValidTransition(from, to) {
    return pastMovesRemain(from, to) &&
        turnIsRespected(to) &&
        changeCount(from, to) === 1
}

function pastMovesRemain(from, to) {
    const allPairs = getTransitionPairs(from, to)
    return allPairs.every(pair => {
        const [from, to] = pair
        if (from === null) {
            return true
        }
        return from === to
    })
}

function getTransitionPairs(from, to) {
    const fromSymbols = allSymbolsAsOneArray(from)
    const toSymbols = allSymbolsAsOneArray(to)
    return fromSymbols.map((_, index) => [fromSymbols[index], toSymbols[index]])
}

function allSymbolsAsOneArray(rows) {
    return rows[0].concat(rows[1]).concat(rows[2])
}

function changeCount(from, to) {
    const allPairs = getTransitionPairs(from, to)
    const changes = allPairs.filter(pair => {
        const [from, to] = pair
        return from !== to
    })
    return changes.length
}

function turnIsRespected(board) {
    const numMovesO = countSymbol(board, 'o')
    const numMovesX = countSymbol(board, 'x')
    const timesXPlayedMoreThanO = numMovesX - numMovesO
    return timesXPlayedMoreThanO >= 0 && timesXPlayedMoreThanO <= 1
}

function countSymbol(board, target) {
    const symbols = allSymbolsAsOneArray(board)
    return symbols.filter(symbol => symbol === target).length
}


module.exports = { isValidTransition, turnIsRespected, changeCount }
