// Ejercicio uno
const suma = (a,b) => {return a + b};
const resta = (a,b) => {return a-b};
const mult = (a,b) => {return a*b};
const div = (a,b) => {return a/b};

console.log(suma(2,5),resta(10,5),mult(11,10),div(121,11))

// Ejercicio dos

const suma2 = (a,b) => a + b;
const resta2 = (a,b) => a-b;
const mult2 = (a,b) => a*b;
const div2 = (a,b) => a/b;

console.log(suma2(1,2),resta2(10,5),mult2(3.5,2),div2(81,9));

//  Ejercicio tres

const callback = (elem) => console.log(elem);
const suma3 = (a,b,callback) => {ans = a+b; callback(ans)};
const resta3 = (a,b,callback) => {ans = a-b; callback(ans)};
const mult3 = (a,b,callback) => {ans = a*b; callback(ans)};
const div3 = (a,b,callback) => {ans = a/b; callback(ans)};

// Ejercicio cuatro

const suma4 = (a,b,callback) => callback(a+b);
const resta4 = (a,b,callback) => callback(a-b);
const mult4 = (a,b,callback) => callback(a*b);
const div4 = (a,b,callback) => callback(a/b);

// Ejercicio cinco

const suma5 = (a,b,callback) => {setTimeout(() => {callback(a+b);}, 1000);};
const resta5 = (a,b,callback) => {setTimeout(() => {callback(a-b);}, 2000);};
const mult5 = (a,b,callback) => {setTimeout(() => {callback(a*b);}, 3000);};
const div5 = (a,b,callback) => {setTimeout(() => {callback(a/b);}, 4000);};

suma5(0,1,callback);
resta5(4,2,callback);
mult5(1.5,2,callback);
div5(16,4,callback);