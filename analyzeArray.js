function analyzeArray(array){
    let object = {};
    if (array.length == 1){
        object = {
            average: array[0],
            min: array[0],
            max: array[0],
            length: 1
        }
    }
    else if(array.length == 0){
        object = {
            average: null,
            min: null,
            max: null,
            length: 0
        }
    }
    else {
        object = {
            average: averageArr(array),
            min: minArr(array),
            max: maxArr(array),
            length: array.length
        }
    }

    return object
    
    
    
}
function averageArr(array){
    sum = array.reduce((acc, val) =>{
        return acc + val
    }, 0)
    return sum/array.length
}

function minArr(array){
    return array.reduce((min,val) => {
        return val < min ? val: min
    }, array[0])
}


function maxArr(array){
   return array.reduce((max, val)=>{
        return val > max ? val : max
    },array[0])
}

module.exports = analyzeArray