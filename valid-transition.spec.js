const { isValidTransition, turnIsRespected, changeCount } = require('./valid-transition')

test('Valid transition should work', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    const to = [
        [null, 'o', 'x'],
        [null, 'x', 'x'],
        ['x', 'o', 'o']
    ]
    expect(isValidTransition(from, to)).toBe(true)
})

test('Move out of turn should not be allowed', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    const to = [
        [null, 'o', 'x'],
        [null, 'o', 'x'],
        ['x', 'o', 'o']
    ]
    expect(turnIsRespected(from)).toBe(true)
    expect(turnIsRespected(to)).toBe(false)
    expect(isValidTransition(from, to)).toBe(false)
})


test('Overwriting a cell is invalid', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    const to = [
        [null, 'x', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]
    expect(isValidTransition(from, to)).toBe(false)
})

test('Overwriting a cell with null is invalid', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    const to = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', null, 'o']
    ]
    expect(isValidTransition(from, to)).toBe(false)
})

test('Making multiple moves in one turn is not allowed', () => {
    const from = [
        [null, 'o', 'x'],
        [null, null, 'x'],
        ['x', 'o', 'o']
    ]

    const to = [
        [null, 'o', 'x'],
        ['o', 'x', 'x'],
        ['x', 'o', 'o']
    ]
    expect(changeCount(from, from)).toBe(0)
    expect(changeCount(to, to)).toBe(0)
    expect(changeCount(from, to)).toBe(2)
    expect(isValidTransition(from, to)).toBe(false)
})