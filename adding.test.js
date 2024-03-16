const addNumbers = require('./adding');

test('properly adds', () => {
    expect(
    addNumbers(66, 2)
    ).toBe(68);
});
