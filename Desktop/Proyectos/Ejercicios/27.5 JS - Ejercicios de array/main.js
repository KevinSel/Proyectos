/* 
1. Dado array, cuenta cantidad de elementos.
2. Dado array y elemento, encuentra el índice de la primera aparición del elemento.
3. Dado array, invierte el orden de sus elementos.
4. Dado array, crea array donde cada elemento se duplique
5. Dado array, calcula la suma de sus elementos.
6. Dado array, encuentra el numero mayor.
7. Dado array, crea un array con sus números pares.
8. Dado array, verifica si un elemento dado está presente.
*/

const arr1 = [1,2,3,4,5]
function uno(arr1){
  return arr1.length
}

const arr2 = [1,2,3,4,5]
const ele2 = 3
function dos(arr2,ele2){
  return arr2.indexOf(ele2)
}


const arr3 = [1,2,3,4,5]
function tres(arr3){
 return arr3.reverse()
}

const arr4 = [1,2,3,4,5]
function cuatro(arr4){
  return arr4.map(function porDos(num){
                    return num*2
                  }
                 )
}

const arr5 = [1,2,3,4,5]
function cinco(arr5){
  return arr5.reduce(function suma(sum1,sum2){
                       return sum1+sum2
                     }
                    )
}

const arr6 = [5,2,9,1,7]
function seis(arr6){
  return arr6.reduce(function max(num1,num2){
                      return Math.max(num1,num2)
                     }
                    )
}

const arr7 = [1,2,3,4,5,6]
function siete(arr7){
  return arr7.filter(function modDos(num){
                        return (num%2==0)
                     }
                    )
}

const arr8 = [1,2,3,4,5]
const ele8 = 3
function ocho(arr8){
  return arr8.indexOf(3)!=-1;
}



console.log("Ej1: " + uno(arr1))
console.log("Ej2: " + dos(arr2,ele2))
console.log("Ej3: " + tres(arr3))
console.log("Ej4: " + cuatro(arr4))
console.log("Ej5: " + cinco(arr5))
console.log("Ej6: " + seis(arr6))
console.log("Ej7: " + siete(arr7))
console.log("Ej8: " + ocho(arr8))