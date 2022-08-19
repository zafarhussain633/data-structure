const dupArr = [20,4,20,10,4,3,20,4]
let newArr = [];

//solution 1
for(let i of dupArr) {
  if(!newArr.includes(i)){
    newArr.push(i);
  }
}



// sol 2 without method
  const isInclud = (arr,item)=>{
    let temp = false
    for(let i of arr) {
        if(i===item){
            temp=true
            break;
        }
    }
    return temp
  }


  for(let j=0; j<dupArr.length; j++) {
        if(!isInclud(newArr,dupArr[j])){
            newArr.push(dupArr[j])
        }
  }

  console.log(newArr)



