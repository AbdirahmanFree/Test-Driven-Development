function ceaserCipher(str,offset){
    if(offset != 0){
        let lower = []
        let upper = []
        for (let i = 0; i<26;i++){
            lower.push(String.fromCharCode("a".charCodeAt(0)+i))
            upper.push(String.fromCharCode("A".charCodeAt(0)+i))
        }

        let index;
        let string = ""
        for(let i = 0; i < str.length; i++){
            if(isLower(str.charAt(i))){
                index = getIndex(str.charAt(i), offset)
                string = string + lower[index]
             }

            else if(isUpper(str.charAt(i))){
                index = getIndex(str.charAt(i), offset)
                string = string + upper[index]
            }
            else{
                string = string + str.charAt(i)
            }

        }
        return string 
        

    }
    return str
    
}

function isLower(char){
    if(char.charCodeAt(0) <="z".charCodeAt(0) && char.charCodeAt(0) >= "a".charCodeAt(0)){
        return true
    }
    return false
}

function isUpper(char){
    if(char.charCodeAt(0) <="Z".charCodeAt(0) && char.charCodeAt(0) >= "A".charCodeAt(0)){
        return true
    }
    return false
}

function getIndex(char, offset){
    let charCode
    if(isUpper(char)){
        charCode = char.charCodeAt(0) - "A".charCodeAt(0)
    }
    else if(isLower(char)){
        charCode = char.charCodeAt(0) - "a".charCodeAt(0)
    }
    let index = offset + charCode
    index > 25 ? index = (index %25) -1 : index 
    return index

}

module.exports = ceaserCipher