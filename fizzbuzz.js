let a=3;
let b=5;
let c=15;
for(i=0;i<=30;i++)
{
  if(i!=c) 
  {
    if(i==a )
   {
     
         console.log("Fizz");
         a=a+3;
   }
   else if(i==b)
   {
     
         console.log("Buzz");
         b=b+5;
   }
   else
   {
       console.log(i);
   }
  }
 else 
   {
      console.log("FizzBuzz");
      c=c+15;
      a=a+3;
      b=b+5;
   }
}