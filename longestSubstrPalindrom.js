const longestPalindrome=(str)=>{
    let longPalindrom = ""
    for(let i=0; i<str.length; i++){
        if(str[i]===str[str.length-1-i]){
            longPalindrom +=str[i]
            console.log("test")
        }
    }
   return longPalindrom
}

console.log(longestPalindrome("abaab"))