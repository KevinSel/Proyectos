let descFocus = 5, descFiesta= 10, precioFocus = 35000, precioFiesta = 25000;

do{
    var modeloPrompt = prompt("Ingresar modelo de Ford, Fiesta o Focus")
}
while(!/(fiesta|focus)/i.test(modeloPrompt));
const modelo = modeloPrompt.match(/(fiesta|focus)/ig);

for(let ind in modelo){
    modelo[ind] = modelo[ind].toLowerCase();
};

let indFocus = modelo.indexOf("focus")+0.1, indFiesta = modelo.indexOf("fiesta")+0.1;
if(indFocus*indFiesta>=0){
    alert(`El precio de tu Ford Focus es ${precioFocus} y tienes un descuento de ${descFocus}%.
El precio de tu Ford Fiesta es ${precioFiesta} y tienes un descuento de ${descFiesta}%.
Total: ${precioFocus*(100-descFocus)/100 + precioFiesta*(100-descFiesta)/100}.`);
}
else if(indFocus>=0){
    alert(`El precio de tu Ford Focus es ${precioFocus} y tienes un descuento de ${descFocus}%.
Total: ${precioFocus*(100-descFocus)/100}.`);
}
else{
    alert(`El precio de tu Ford Fiesta es ${precioFiesta} y tienes un descuento de ${descFiesta}%.
Total: ${precioFiesta*(100-descFiesta)/100}.`);
};                                                                                                       