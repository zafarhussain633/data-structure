
//reverse string solutuin 1
function fibbo(n) {
    let a = -1; b = 1;
    let next;
    for (let i = 0; i <= n; i++) {
        next = a + b
        console.log(next)
        a=b
        b = next
    }

}
fibbo(10)




