const reverseString = require('./reverseString')

test('exists', ()=> {
    reverseString()
})

test('palindrome', ()=> {
    expect(reverseString('racecar')).toBe('racecar')
    expect(reverseString('dad')).toBe('dad')
    expect(reverseString('J')).toBe('J')
})