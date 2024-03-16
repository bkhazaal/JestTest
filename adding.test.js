const addNumbers = require('./adding');

test('properly adds', () => {
    expect(addNumbers(1, 2)).toBe(3);
});
