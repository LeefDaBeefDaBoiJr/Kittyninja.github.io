// don't worry about all the dom access, it is just an addition quiz

const inp2 = document.getElementById("two")
    const inp1 = document.getElementById("one")
    const eichtwo = document.querySelector("h2")

    const label1 = document.getElementById("pe")
    const label2 = document.getElementById("mag")

    var done = false;
    let num1 = Math.floor(Math.random()*300)
    let num2 = Math.floor(Math.random()*300)

    let foo = Math.floor(Math.random()*2)
console.log(foo)
    var rightNum = (num1 + num2)
    var wrongNum = (num1 + num2 - Math.floor(Math.random()*5)) - 1;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    if (foo === 0) {
    label2.textContent = wrongNum;
    label1.textContent = rightNum;

    setInterval(function() {
if (done === false) {
      if (inp2.checked === true) {
        eichtwo.textContent = "THANKS FOR BEING T E R R I B L E AT MATH! You are done.";
        done = true;
        inp1.style.display = "none";
        inp2.style.display = "none";
        label1.style.display = "none";
        label2.style.display = "none";
        document.getElementById("h32").innerHTML = "Correct Answer: " + rightNum;
        document.getElementById("h33").innerHTML = "You Answered: " + wrongNum;
      } else {
      eichtwo.textContent = "Waiting for answer..."

    }
  }
if (done === false) {
        if (inp1.checked === true) {
          done = true;
          eichtwo.textContent = "Correct! You are done."
          inp1.style.display = "none";
          inp2.style.display = "none";
          label1.style.display = "none";
          label2.style.display = "none";
          document.getElementById("h32").innerHTML = "Correct Answer: " + rightNum;
          document.getElementById("h33").innerHTML = "You Answered: " + rightNum;
        } }


    },100)
  }
  if (foo === 1) {
  label1.textContent = wrongNum;
  label2.textContent = rightNum;

  setInterval(function() {
if (done === false) {
    if (inp2.checked === true) {
      eichtwo.textContent = "Correct! You are done.";
      done = true;
      inp1.style.display = "none";
      inp2.style.display = "none";
      label1.style.display = "none";
      label2.style.display = "none";
      document.getElementById("h32").innerHTML = "Correct Answer: " + rightNum;
      document.getElementById("h33").innerHTML = "You Answered: " + rightNum;
    } else {
    eichtwo.textContent = "Waiting for answer..."

  }
}
if (done === false) {
      if (inp1.checked === true) {
        done = true;
        eichtwo.textContent = "THANKS FOR BEING T E R R I B L E AT MATH! You are done."
        inp1.style.display = "none";
        inp2.style.display = "none";
        label1.style.display = "none";
        label2.style.display = "none";
        document.getElementById("h32").innerHTML = "Correct Answer: " + rightNum;
        document.getElementById("h33").innerHTML = "You Answered: " + wrongNum;
      } }


  },100)
}



