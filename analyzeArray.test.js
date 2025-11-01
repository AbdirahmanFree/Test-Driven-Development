const analyzeArray = require("./analyzeArray")

test('exists', ()=>{
    expect(analyzeArray([1])).toBe(undefined)
})