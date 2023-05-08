var myTimeout = setTimeout(myGreeting, 500);
var myTimeout = setTimeout(myGreeting2, 1000);
var myTimeout = setTimeout(myGreeting, 1500);
var myTimeout = setTimeout(myGreeting2, 2000);
var myTimeout = setTimeout(myGreeting, 2500);
var myTimeout = setTimeout(myGreeting2, 3000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Un!";
};

 function myGreeting2() {
  document.getElementById("demo").innerHTML = "Dos!";
};

