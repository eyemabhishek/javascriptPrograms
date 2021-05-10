

// call function as parameter


function ToCall(){
    alert("hey!!! I was called");
  }
  
  function passParameter( paramFunc) {
     
     if (paramFunc && (typeof paramFunc == "function")) {
        paramFunc();   
     }
  }
 // calling passParameter and send the other function to it
  passParameter(ToCall); 