function reverNumber(){
let myname =12345;
let rev=0;
while(myname>0){
  rev = (rev*10) +(myname%10);
  myname=Math.floor(myname/10);
}
return rev
}
console.log(reverNumber());
