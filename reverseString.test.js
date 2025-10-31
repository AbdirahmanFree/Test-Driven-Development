const reverseString = require('./reverseString')


test('palindrome', ()=> {
    expect(reverseString('racecar')).toBe('racecar')
    expect(reverseString('dad')).toBe('dad')
    expect(reverseString('J')).toBe('J')
})

test('none palindrome words',()=> {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('mike')).toBe('ekim')
    expect(reverseString('IkRh5')).toBe('5hRkI')
})

test('empty string', ()=> {
    expect(reverseString('')).toBe('')
})
