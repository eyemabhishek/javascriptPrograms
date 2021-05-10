
// to check if user age is between  18-44 and opening this: https://selfregistration.cowin.gov.in/
// for self registration



function calculateAge() {


    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);


    if (userinput == null || userinput == '') {
        document.getElementById("message").innerHTML = "Choose a date!";
        return false;
    } else {

        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);

        if (age >= 18 && age <= 44)
         {

            window.open('https://selfregistration.cowin.gov.in/');

        }

        else {

            document.write("You Are not Eligible to Take the Vacine")
        }


    }



}





