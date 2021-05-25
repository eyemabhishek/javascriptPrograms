
// function that returns last Element of an array

function lastElement(num) {
  if (num.length === 0) {
    return null;
  } else {
    return num[num.length - 1];
  }
}
lastElement([1,2,3,4,5]);



// function to convert first letter of a string into uppercase
function capitalize(text){

let start = text[0].toUpperCase();

let end = text.slice(1);
let finalStr = start + end;
console.log(finalStr);

}

capitalize("eggplant")
capitalize("pamplemousse")
capitalize("squid")



// function that add each elemnts in array and output the sum

function sumArray(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let n = 0;
  console.log(arr.reduce(reducer, n));
}

sumArray([1, 2, 3]);
sumArray([2, 2, 2,2]);
sumArray([50, 50, 1]);

// function to retrun days of week 

const day = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thurday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return day[num];
  }
}

// higher order function

function bank() {
  const facility = ["atm", "cash", "net banking", "mutual fund"];
  function service() {


    for (let serv of facility) {
      console.log(`Choose your service: ${serv}`);
    }
  }
  service()
}
bank()




