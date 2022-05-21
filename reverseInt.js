
function reverseNumber(number){
    let temp="";
    let re = number
    for(let i=0; i<number; i++){
        let a = re%10
        if(Math.floor(a) !==0) temp += Math.floor(a)
        re = re/10
    }

    return temp
}


console.log(reverseNumber(200));