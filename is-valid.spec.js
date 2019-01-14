// is-valid.spec.js
const { isValidBoard } = require('./is-valid')

test('Board of 2x3 should be invalid', () => {
    const board = [
        [null, null, null],
        [null, null, null]
    ]
    expect(isValidBoard(board)).toBe(false)
})

test('Board of 3x2 should be invalid', () => {
    const board = [
        [null, null],
        [null, null],
        [null, null]
    ]
    expect(isValidBoard(board)).toBe(false)
})

test('Board of 3x3 should be valid', () => {
    const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    expect(isValidBoard(board)).toBe(true)
})

test('Board 3x3 with X and O should be valid', () => {
    const board = [
        [null, 'x', 'x'],
        ['o', 'o', null],
        [null, 'x', 'o']
    ]
    expect(isValidBoard(board)).toBe(true)
})

test('Boards that contain invalid symbols should be invalid', () => {
    const board = [
        [null, 'x', 'x'],
        ['o', 'NONSENSE', null],
        [null, 'x', 'I\'m a hacker!']
    ]
    expect(isValidBoard(board)).toBe(false)
})