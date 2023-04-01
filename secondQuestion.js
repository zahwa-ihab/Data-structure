function dot_product(v1, v2) {
    var dotProduct= -1;
    var orthogonal=false;
    for(let i=0 ; i< v1.length ; i++){
        dotProduct=dotProduct+(v1[i]*v2[i]);
    }
    if(dotProduct == 0){
        orthogonal=true
    }
    
    return orthogonal;
    
  }
  
  const vector1= new Array(3,4);
  const vector2= new Array(-3,4);
  let orthogonal=dot_product(vector1,vector2);
  console.log(orthogonal);