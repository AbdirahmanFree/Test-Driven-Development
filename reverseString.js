function reverseString(str){
    let revString = str.split('').reduce((string, value)=> {
        return value.concat(string)
    })
    return revString
}
module.exports = reverseString;