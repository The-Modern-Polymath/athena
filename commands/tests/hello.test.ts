import hello from '../hello';

test('hello function returns Hello World', () => {
    const response = hello();
    const expectedResponse = 'Hello World';
    expect(response).toBe(expectedResponse);
});
