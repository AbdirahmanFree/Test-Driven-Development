const analyzeArray = require("./analyzeArray")

test('empty array', ()=> {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    })
})

test('array with one element', ()=> {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    })

    expect(analyzeArray([2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 1
    })

    expect(analyzeArray([-8])).toEqual({
        average: -8,
        min: -8,
        max: -8,
        length: 1
    })

    
    
})

test('multiple elements', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average: 3, length: 5, max: 5, min: 1})
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, length:6 , max: 8, min: 1})
})