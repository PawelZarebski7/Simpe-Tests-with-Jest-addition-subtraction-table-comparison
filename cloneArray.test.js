const cloneArray = require('./cloneArray')

test('prawidłowo skolonowana tablica', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array) // sprawdza czy wartość tablicy jest taka sama
    expect(cloneArray(array)).not.toBe(array) // sprawdza czy to nie ta sama tablica
})