
import * as data from "./data.mjs";


// Objetos declarados en JS transformados en array (Los dejo en formato key/value, es posible extraer solo values,
//o extraer values y poner algun valor de referencia (id, nombre, origen))

function objToArray(objs){
    let arr = [];
    objs.forEach(obj =>
    {Object.keys(obj).map(key=> {arr.push(key); arr.push(obj[key])})});
    return arr;
};

let gestores = objToArray([data.gestorGratis,data.gestorRegular,data.gestorPremium]);
let clientes = objToArray([data.clienteGratis,data.clienteRegular,data.clientePremium]);
let mensajes = objToArray([data.mensajeCliente,data.mensajeSistema,data.mensajeGestor]);

// Array transformado a JSON

function aJson(arr){
    let ans = "{"
    for (let i = 0; i<arr.length;i+=2){
        ans += `,"${arr[i]}":${JSON.stringify(arr[i+1])}`
    };
    return ans.replace(",","") + "}";
};

let gestoresJson = aJson(gestores);
let usuariosJson = aJson(clientes);
let mensajesJson = aJson(mensajes);

// JSON transformado a Array

let gestoresArray = objToArray([JSON.parse(gestoresJson)]);
let usuariosArray = objToArray([JSON.parse(usuariosJson)]);
let mensajesArray = objToArray([JSON.parse(mensajesJson)]);

// Server request usando AJAX

let request = new XMLHttpRequest();
request.open("POST", "http://localhost:8085/ok", true);
request.send(mensajesJson);

// Obtener los gestores cada 5 segundos

let gestoresText = Object.keys(JSON.parse(gestoresJson)).join(", ");

setInterval(() => {
    document.getElementById("abc").textContent=`Gestores: ${gestoresText}`
}, 5000);

setTimeout(() => {setInterval(() => {
    document.getElementById("abc").textContent="Gestores:"
}, 5000);},2500);


