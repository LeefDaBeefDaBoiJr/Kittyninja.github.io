/*
Whatever you set your "min" or "max" to, this little trick makes your randomNum a random number between 3 and 7.
*/




// call the function and define the min and the max to an html dom input

    // just so we don't get error messages I will define the variables to 3 and 7.
    var min = 3;
    var max = 7;

    var difference = 0;
    var randomNum = 0;

    function random() {
    difference = parseInt(max - min);

    randomNum = Math.round(Math.random()*difference)+parseInt(min)
    console.log(randomNum)
    }
