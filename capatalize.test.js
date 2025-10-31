const capatalize = require('./capatalize');

test('Exists',() =>{
    capatalize('K')
})

test('Uppercase letter', ()=> {
    expect(capatalize('H')).toBe('H')
    expect(capatalize('J')).toBe('J')
})

test('Lowercase letter',()=>{
    expect(capatalize('x')).toBe('X')
    expect(capatalize('y')).toBe('Y')
    expect(capatalize('h')).toBe('H')
})

test('Capatalized word', ()=> {
    expect(capatalize('Hello')).toBe('Hello')
    expect(capatalize('HELLO')).toBe('HELLO')
})

test('Uncapatalized word', ()=> {
    expect(capatalize('hello')).toBe('Hello')
    expect(capatalize('word')).toBe('Word')
    expect(capatalize('hUNGRY')).toBe('HUNGRY')
})

test('Empty string', ()=> {
    expect(capatalize('')).toBe('')
})

test('null input', ()=> {
    expect(capatalize(null)).toBe(null)
})

test ('non char first letter', () => {
    expect(capatalize('800Bs')).toBe('800Bs')
    expect(capatalize('$money')).toBe('$money')
})

