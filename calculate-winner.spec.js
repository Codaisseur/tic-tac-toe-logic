// calculate-winner.spec.js

const { calculateWinner } = require('./calculate-winner')

test('Horizontal winner X on line 1 should work', () => {
    const board = [
        ['x', 'x', 'x'],
        ['o', null, 'o'],
        [null, 'x', 'o']
    ]
    expect(calculateWinner(board)).toBe('x')
})

test('Horizontal winner O on line 3 should work', () => {
    const board = [
        [null, null, null],
        [null, 'x', 'o'],
        ['o', 'o', 'o']
    ]
    expect(calculateWinner(board)).toBe('o')
})

test('No horizontal winner should return null', () => {
    const board = [
        [null, 'x', 'x'],
        [null, 'x', 'o'],
        ['o', null, 'o']
    ]
    expect(calculateWinner(board)).toBeNull()
})

test('Vertical winner O on column 1 should work', () => {
    const board = [
        ['o', 'x', 'x'],
        ['o', null, 'o'],
        ['o', 'x', 'o']
    ]
    expect(calculateWinner(board)).toBe('o')
})

test('Vertical winner X on column 3 should work', () => {
    const board = [
        ['o', null, 'x'],
        ['x', null, 'x'],
        ['o', null, 'x']
    ]
    expect(calculateWinner(board)).toBe('x')
})

test('Diagonal winner X top-left to bottom-right should work', () => {
    const board = [
        ['x', null, 'o'],
        [null, 'x', null],
        ['o', null, 'x']
    ]
    expect(calculateWinner(board)).toBe('x')
})

test('Diagonal winner O top-right to bottom-left should work', () => {
    const board = [
        ['x', null, 'o'],
        [null, 'o', null],
        ['o', null, 'x']
    ]
    expect(calculateWinner(board)).toBe('o')
})