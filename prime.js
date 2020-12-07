// prime number calculator

      var num = 0;
function make() {
  num = document.querySelector("input").value;
  console.log(num)
  document.querySelector("h4").innerHTML = "Your chosen number: " + num;
}

var x = 0;
var i = 0;






var factors = [

];



  function factor() {
    factors = [];
document.querySelector("h2").innerHTML = "";
    for (i = 0; i <= num; i++) {
      x = num/i;
      var isWhole = false;
      if( x % 1 == 0) {
        isWhole = true;
     } else {
        isWhole = false;
    }
    if (isWhole === true) {
      document.querySelector("h2").innerHTML += "<br>This is a factor: " + i;
      factors.push(i);


    }



    }

if (factors.length === 2) {
  document.querySelector("h1").innerHTML = num + " is a prime number."
} else if (factors.length > 2) {
  document.querySelector("h1").innerHTML = num + " is a composite number."
} else {
  document.querySelector("h1").innerHTML = num + " is neither prime nor composite!"
}
  }

console.log(factors)
