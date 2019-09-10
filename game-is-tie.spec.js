const { gameIsTie } = require('./game-is-tie')

test('Game is tied should work', () => {
    const board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(true)
})

test('Board with winner can never be tied', () => {
    const board = [
        ['x', 'o', 'o'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(false)
})

test('Unwinnable board should be considered a tie', () => {
    const board1 = [
        ['x', 'o', 'x'],
        ['x', 'o', null],
        ['o', 'x', 'o']
    ]
    const board2 = [
        ['o', 'o', 'x'],
        ['x', 'x', 'o'],
        ['o', null, 'x']
      ]
    expect(gameIsTie(board1)).toBe(true)
    expect(gameIsTie(board2)).toBe(true)
})

test('Winnable board should not be considered a tie', () => {
    const board = [
        ['x', null, null],
        ['o', 'o', null],
        ['x', null, 'x']
    ]
    expect(gameIsTie(board)).toBe(false)
})