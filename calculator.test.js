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

test('divide function', ()=> {
    expect(calculator.divide(1,1)).toBe(1)
    expect(calculator.divide(10,2)).toBe(5)
    expect(calculator.divide(1,2)).toBe(0.5)
    expect(calculator.divide(1/0)).toBe(NaN)
   
})

test('multiply function', ()=> {
    expect(calculator.multiply(0,0)).toBe(0)
    expect(calculator.multiply(1,1)).toBe(1)
    expect(calculator.multiply(4,5)).toBe(20)
    expect(calculator.multiply(-3,-4)).toBe(12)
    expect(calculator.multiply(-1,12345)).toBe(-12345)
})