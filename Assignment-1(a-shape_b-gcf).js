//Assignment 1

//a
let str = "*"
for(let i=0;i<5;i++){
  console.log(str)
  str=str+" *"
}

//b GCF
//Input method is yet to be taught
let a=65;
let b=78;
if(a<b){
  for(let i=a;i>0;i++){
    if(b%i==0 && a%i==0){
      console.log(i);
    }
  }
}else{
   for(let i=b;i>0;i++){
      if(b%i==0 && a%i==0){
        console.log(i);
      }
}
