
//soltion 1
const  findMostRepeatedChar = (word)=>{
 let repChar = ""
 let currrent = 0;
 for(let i of word){
  let temp = 0;
  for (let j of word){
    if(i===j){
      temp++;
    }
  }
  if(temp>currrent){
  currrent=temp
    repChar = i
  }
 }
 return repChar
}


//solution 2
function mostReapeatedChar(str){
  let resultCount = 0;
  let string = ""
for(let i=0; i<str.length; i++){
  let count=0
    for(let j=0; j<str.length; j++){
        if(str[i]===str[j]){
          count++
        }
    }
    if(count>resultCount){
      resultCount = count
      string=str[i]
    }
}
return string
}



console.log(mostReapeatedChar("zafaaar"));
console.log( findMostRepeatedChar("abazzzzzbbzzzzzabczzzzbbabdra"));

