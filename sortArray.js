
const sortArray=(arr)=>{
   let newArr = [...arr]
   for(let i=0; i<newArr.length; i++){ 
    for(let j=0; j<newArr.length; j++){
        if(newArr[i]<newArr[j]){
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
        }
    }
   }
   return newArr;
}


console.log(sortArray([2,4,5,1,8]))