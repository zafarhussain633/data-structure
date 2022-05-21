function palindrome(string){
    let revStr = ""
    for(let char of string){
        revStr = char + revStr
    }
    return revStr===string
}

console.log(palindrome("abcba"));


//solution 2


function palindrome2(string){
    let temp;
    let length = Math.floor(string.length/2)
    let originalLengh = string.length-1
    for(let i=0; i<=length; i++){ 
        temp = string[i] === string[originalLengh]
        originalLengh--
    }
    return temp
}

console.log(palindrome2("apllpa"))



//solution 3
function palindrome(string){
    return string.split("").every((char,index)=> char===string[string.length-(index+1)])
}

console.log(palindrome("abba"))
