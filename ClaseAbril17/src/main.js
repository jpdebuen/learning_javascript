var number_array = [1,2,3,4,5];

var new_number_array = number_array.map(function(element, index, array){
    return element * 3;
})

var even_array = new_number_array.filter(function(element, index, array){
    return element % 2 === 0;
})

console.log(even_array);