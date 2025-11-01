const ceaserCipher = require("./ceaserCipher")

test('one letter no offset', ()=> {
    expect(ceaserCipher("a",0)).toBe("a")
})