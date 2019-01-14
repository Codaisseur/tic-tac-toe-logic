const {gameIsTie} = require('./game-is-tie')

test('Game is tied should work', () => {
    const board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(true)
})

test('Non-empty board can never be tied', () => {
    const board = [
        ['x', 'o', null],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(false)
})

test('Board with winner can never be tied', () => {
    const board = [
        ['x', 'o', 'o'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(false)
})
