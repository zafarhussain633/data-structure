const pyramid = (length)=>{

    for(let i=0; i<length; i++){
        let star =  ""
        let space=""

        for(let j=0; j<i; j++){
           star +=" *" 
        }

        for(let k=length; k>i; k--){
            space +=" "
        }
        
       console.log(space+star)
        
    }  

    for(let i=length; i>0; i--){
        let star =  ""
        let space=""

        for(let j=0; j<i; j++){
           star +=" *" 
        }

        for(let k=length; k>i; k--){
            space +=" "
        }
        
       console.log(space+star)
        
    }

}

pyramid(4);


