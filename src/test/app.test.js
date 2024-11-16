const message = require('../app');

test('return message "Hola mundo"', () => {
    expect(message()).toBe('Hola mundo');
})