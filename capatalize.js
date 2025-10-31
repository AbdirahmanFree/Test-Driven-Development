function capatalize(str){
    if(str == null) {
        return null
    }
    if(str.charCodeAt(0) <= 122 && str.charCodeAt(0) >= 97){
        let capital = String.fromCharCode(str.charCodeAt(0) -32)
        return capital.concat(str.slice(1))
    }
    else{
        return str
    }

}

module.exports = capatalize