//write funtion for reverse number
const reverseNumber = (number)=>{
 let originalNum = number;
 let revNum = 0
 while(originalNum>0){
    revNum = (revNum*10)+originalNum%10
    originalNum = Math.floor(originalNum/10)
 }
 return revNum
}

console.log(reverseNumber(23456))