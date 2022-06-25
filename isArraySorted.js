

const isArraySorted = (arr) => {
    let isAccending = true;
    let isDecending = true;

    for (let i = 1; i < arr.length - 1; i++) {
        let currentVal = arr[i];  prevVal = arr[i - 1];  nextVal = arr[i + 1];

        if (!(currentVal >= prevVal && currentVal <= nextVal)) isAccending=false
        if (!(currentVal <= prevVal && currentVal >= nextVal)) isDecending=false
    }

    if (isAccending) return "accending"
    else if (isDecending) return "decending"
    else return "not sorted"
    
}


console.log(isArraySorted([10000, 1000, 300, 100]))