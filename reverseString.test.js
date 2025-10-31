const reverseString = require('./reverseString')

test('exists', ()=> {
    reverseString()
})

test('palindrome', ()=> {
    expect(reverseString('racecar')).toBe('racecar')
})