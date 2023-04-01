const set1= new Array(3,1,7,9);
const set2= new Array(2,4,1,9,3);
let Distinct= new Array();
let temp;
let found= false;
for( let i=0; i<set1.length ; i++){
     temp= set1[i];
     for( let j=0 ; j<set2.length ; j++){
          found=false;
         if( temp == set2[j]){
             found=true;
             console.log(set2[j]);
             break;
         }
     }
      console.log(found);
     if(found == false){
         Distinct.push(temp);
     }
   }

for( let i=0; i<set2.length ; i++){
     temp= set2[i];
     for( let j=0 ; j<set1.length ; j++){
          found=false;
         if( temp == set1[j]){
             found=true;
             console.log(set1[j]);
             break;
         }
     }
      console.log(found);
     if(found == false){
         Distinct.push(temp);
     }
   }

console.log(Distinct);
let sum=0;
for(var x=0 ; x<Distinct.length ; x++){
    sum=sum+Distinct[x];
}
console.log(sum);