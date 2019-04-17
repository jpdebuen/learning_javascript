/*
//Función que transforma dólares a pesos
function toMXN(USD){
    return buyGas(18.87*USD);
};

function buyGas(MXN){
    return MXN/19.37
}

console.log("Te alcanza para", toMXN(100), "litros de la verde.");
*/


/*
Función con arreglos
input -> 30920
output -> 02903

function reverseWord(palabra){
    return palabra.split("").reverse().join(""); 
}
console.log(reverseWord("ejemplo"));
*/

/*
input -> "holi a todos"
output -> "Holi A Todos"


function capitalizer(oracion){
    return oracion.split(" ").map(function(element) {
        var wordArray = element.split("");
        wordArray[0] = wordArray[0].toUpperCase();
        return wordArray.join("");
    }).join(" ");

}

console.log(capitalizer("holi a todos"));
*/

/*
TAREA:

Encriptación César 

Input -> "Hola"
Output -> "ovsh"

avanza 7 letras en el abecedario



Pintar esto en la consola:

    #
   ##
  ###
 ####
#####

pyramid(number)

*/


var numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even_numbers = numbers_array.filter(function(element) {
    return element % 2 === 0;
}) 

