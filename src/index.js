module.exports = function reverse (n) {
   if (n<0){
      n=n*(-1);
   }
 let r=0;
 let num=n;
 let result=0;

 while (num>0){
    num=Math.floor(num/10);
    r++;
 }
for (let i=0; i<r; i++){
   result=result+n%10;
   n=Math.floor(n/10);
   if (i==r-1){
      break;
   } else{
      result=result*10;
   }
}
return result;
}
