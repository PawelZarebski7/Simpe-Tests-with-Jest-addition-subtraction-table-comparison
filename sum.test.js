const sum = require('./sum')

test('dodaj dwie liczby całkowite', () => {
    expect(sum(1,2)).toBe(3)
})