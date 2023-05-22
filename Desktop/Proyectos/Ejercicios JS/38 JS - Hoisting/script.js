
function saludar2() {
    var edad; // La declaracion de la variable se mueve al principio del ambito
    console.log(edad); // En este punto, la variable edad existe pero aun no tiene un valor asignad , por lo que es undefined
    edad = 25; // La asignacion de valor se mantienen en su lugar original
}
saludar2();


function saludar1() {
var i; // La declaración de la variable se mueve al principio del ámbito de la función
    
for (var i = 0; i < 10; i++) {
console.log('Hola');
}

console.log(i); // En este punto, la variable i tiene el valor 10, ya que fue actualizada dentro del ciclo for
}