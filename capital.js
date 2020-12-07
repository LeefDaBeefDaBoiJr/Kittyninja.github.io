    // capital quiz
    
    var correct1 = 0;
    var correct2 = 0;
    var correct3 = 0;
    function check1() {
      var baba = document.getElementById("input").value;
      if (baba === "Madrid" || baba === "madrid" || baba === "MADRID") {
        correct1 = 1;
      } else {
        correct1 = 0;
      }
    }
    function check2() {
      var baba = document.getElementById("quack").value;
      if (baba === "Riyadh" || baba === "riyadh" || baba === "RIYADH") {
        correct2 = 1;
      } else {
        correct1 = 0;
      }
    }
    function check3() {
      var baba3 = document.getElementById("back").value;
      if (baba3 === "Tirana" || baba3 === "tirana" || baba3 === "TIRANA") {
        correct3 = 1;
      } else {
        correct3 = 0;
      } }

    setInterval(function() {
    var correctAns = (correct1 + correct2 + correct3)
     document.getElementById("myId").innerHTML = "Correct: " + correctAns;
     if (correctAns === 3) {
       document.body.style.backgroundColor = "green";
     }
   },1)
