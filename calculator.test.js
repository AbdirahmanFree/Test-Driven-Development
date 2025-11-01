const Calculator = require("./calculator")
const calculator = new Calculator()

test('add function', ()=>{
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.add(3,-1)).toBe(2)
    expect(calculator.add(300,-230)).toBe(70)
})

test('subtract function', ()=>{
    expect(calculator.subtract(1,3)).toBe(-2)
    expect(calculator.subtract(0,0)).toBe(0)
    expect(calculator.subtract(-3,5)).toBe(-8)
    expect(calculator.subtract(-3,-5)).toBe(2)
})