const notaUno = prompt("Primera nota"), notaDos = prompt("Segunda nota"), notaTres = prompt("Tercera nota");
const media = (parseInt(notaUno) + parseInt(notaDos) + parseInt(notaTres))/3; 

if (media >= 5){
    alert("Aprobado!!!")
}
else {
    alert("Desaprobado")
};
