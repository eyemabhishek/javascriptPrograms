
// celsius to fahrenheit to celsius

a=prompt("Enter Temp")


function  c2f (temp){

    temp = (temp * 9/5) + 32 ;  

    document.write("celsius to fahrenheit: ") 
   document.write(temp)

}
c2f(a);

function  f2c (temp){

    temp = (temp - 32) * 5/9 ;  

    document.write("fahrenheit to celsius : ") 
   document.write(temp)

}
f2c(a);

