import {data} from "./data.js";

// Objetos declarados en JS transformados en array (Los dejo en formato key/value, es posible extraer solo values,
//o extraer values y poner algun valor de referencia (id, nombre, origen))

function objToArray(objs: Object[]){
    let arr:String[] = [];
    objs.forEach((obj:any) =>
    {Object.keys(obj).map(key=> {arr.push(key); arr.push(obj[key])})});
    return arr;
};

let gestores:String[] = objToArray([data.gestorGratis,data.gestorRegular,data.gestorPremium]);
let clientes:String[] = objToArray([data.clienteGratis,data.clienteRegular,data.clientePremium]);
let mensajes:String[] = objToArray([data.mensajeCliente,data.mensajeSistema,data.mensajeGestor]);

// Array transformado a JSON

function aJson(arr: String[]){
    let ans:String = "{"
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

const abc = document.getElementById("abc");
if(abc !== null){
setInterval(() => {
    abc.textContent=`Gestores: ${gestoresText}`
}, 5000);

setTimeout(() => {setInterval(() => {
    abc.textContent="Gestores:"
}, 5000);},2500);
}
