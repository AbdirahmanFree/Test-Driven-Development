const ceaserCipher = require("./ceaserCipher")

test('one letter no offset', ()=> {
    expect(ceaserCipher("a",0)).toBe("a")
    expect(ceaserCipher("b",0)).toBe("b")
    expect(ceaserCipher("c",0)).toBe("c")
})

test('full words no offset',()=> {
    expect(ceaserCipher("hello",0)).toBe("hello")
})

test('one letter with offset', () => {
    expect(ceaserCipher("a",1)).toBe("b")
    expect(ceaserCipher("b",3)).toBe("e")
    expect(ceaserCipher("z",-1)).toBe("y")
    expect(ceaserCipher("A",4)).toBe("E")
    expect(ceaserCipher("z",1)).toBe("a")
    expect(ceaserCipher("w",2)).toBe("y")

    expect(ceaserCipher("W",3)).toBe("Z")
})

test('punctuation',()=> {
    expect(ceaserCipher(",",0)).toBe(",")
    expect(ceaserCipher(",",4)).toBe(",")
    expect(ceaserCipher(";",23)).toBe(";")
})

test('words',()=> {
    expect(ceaserCipher("ab",1)).toBe("bc")
    expect(ceaserCipher("xyz",3)).toBe("abc")
    expect(ceaserCipher('HeLLo', 3)).toBe("KhOOr")
    
})

test('sentences', () => {
    expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

