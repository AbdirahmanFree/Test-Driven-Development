const reverseString = require('./reverseString')


test('palindrome', ()=> {
    expect(reverseString('racecar')).toBe('racecar')
    expect(reverseString('dad')).toBe('dad')
    expect(reverseString('J')).toBe('J')
})

test('none palindrome words',()=> {
    expect(reverseString('hello')).toBe('olleh')
})