const subtract = require('./subtrack')

test('różncia dwóch liczb', () => {
    expect(subtract(1, 2)).toBe(-1)
})