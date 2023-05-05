const myTimeout = setTimeout(myGreeting, 5000);
const myTimeout2 = setTimeout(myGreeting2, 4000);
const myTimeout3 = setTimeout(myGreeting3, 3000);
const myTimeout4 = setTimeout(myGreeting4, 2000);
const myTimeout5 = setTimeout(myGreeting5, 1000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}
function myGreeting2() {
  document.getElementById("demo2").innerHTML = "Feliz cumpleaños!"
}
function myGreeting3() {
  document.getElementById("demo3").innerHTML = "Texto tres!"
}
function myGreeting4() {
  document.getElementById("demo4").innerHTML = "Texto cuatro!"
}
function myGreeting5() {
  document.getElementById("demo5").innerHTML = "Texto cinco!"
}