
import * as data from "./data.mjs";

let gestores = [];
Object.keys(data.gestorGratis).map(key=> {gestores.push(key); gestores.push(data.gestorGratis[key])});
Object.keys(data.gestorRegular).map(key=> {gestores.push(key); gestores.push(data.gestorRegular[key])});
Object.keys(data.gestorPremium).map(key=> {gestores.push(key); gestores.push(data.gestorPremium[key])});

let usuarios = [];
Object.keys(data.clienteGratis).map(key=> {usuarios.push(key); usuarios.push(data.clienteGratis[key])});
Object.keys(data.clienteRegular).map(key=> {usuarios.push(key); usuarios.push(data.clienteRegular[key])});
Object.keys(data.clientePremium).map(key=> {usuarios.push(key); usuarios.push(data.clientePremium[key])});

let mensajes = [];
Object.keys(data.mensajeCliente).map(key=> {mensajes.push(key); mensajes.push(data.mensajeCliente[key])});
Object.keys(data.mensajeGestor).map(key=> {mensajes.push(key); mensajes.push(data.mensajeGestor[key])});
Object.keys(data.mensajeSistema).map(key=> {mensajes.push(key); mensajes.push(data.mensajeSistema[key])});


console.log("gestores",gestores);
console.log("usuarios",usuarios);
console.log("mensajes",mensajes);