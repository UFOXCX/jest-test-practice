beforeAll(() =>{
    console.log('antes de todas');
})

beforeEach(() =>{
    console.log('antes de cada una');
})

afterAll(() =>{
    console.log('despues de todas');
})

afterEach(() =>{
    console.log('despues de cada una');
})

test('first test', () => {
    console.log('first test');
    expect(true).toBe(true);
});

test('second test', () => {
    console.log('second test');
    expect(true).toBe(true);
});