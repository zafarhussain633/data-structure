//write a program to reverse string
function reverseString(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
   return newStr
}
console.log(reverseString("hussain"))



//solution 2
function reverse2(string){
    let arr = string.split("").reverse().join(",");
    return arr
}

console.log(reverse2("hussain"));




//sloution 3
function reverse3(string){
    let str =""
    for(let i of string ){
        str = i+str
    }
    return str
}

console.log(reverse3("password"))

