var koders_array = [
    {
    'nombre': 'David',
    'edad': 22,
    'genero': 'M',
    'hobbies': [
        'Fotografia',
        'Viajar'
    ],
    "koderHobbies": function(){
        return "Hola! Soy " + this.nombre + " y mis hobbies son " + this.hobbies.join(", ");
    }
    },
    {
    'nombre': 'Jorge',
    'edad': 23,
    'genero': 'M',
    'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
    ],
    "koderHobbies": function(){
        return "Hola! Soy " + this.nombre + " y mis hobbies son " + this.hobbies.join(", ");
    }
    },
    {
    'nombre': 'Erick',
    'edad': 25,
    'genero': 'M',
    'hobbies': [
        'Caligrafia',
        'Videojuegos'
    ],
    "koderHobbies": function(){
        return "Hola! Soy " + this.nombre + " y mis hobbies son " + this.hobbies.join(", ");
    }
    },
    {
    'nombre': 'Diana',
    'edad': 27,
    'genero': 'F',
    'hobbies': [
        'Hardware',
        'Videojuegos'
    ],
    "koderHobbies": function(){
        return "Hola! Soy " + this.nombre + " y mis hobbies son " + this.hobbies.join(", ");
    }
    },
    {
    'nombre': 'Rodo',
    'edad': 32,
    'genero': 'M',
    'hobbies': [
        'Musica',
        'Programacion'
    ],
    "koderHobbies": function(){
        return "Hola! Soy " + this.nombre + " y mis hobbies son " + this.hobbies.join(", ");
    }
    }
];

koders_array.forEach(function(element){
    console.log(element.koderHobbies());
})

/*

// Nombres de koders
koders_array.forEach(function(element){
    console.log(element.nombre);
});

// Hobbies en lista
var koder_hobbies = koders_array.map(function(element){
    return element.hobbies.forEach(function(element){
        console.log(element);
    });
});

// Koders y sus hobbies
koders_array.forEach(function(element){
    var hobbie = element.hobbies.join(", ")
    console.log("Hola, soy", element.nombre, "y mis hobbies son", hobbie)
});

// Koders a los que les gustan los videojuegos
var koders_videojuegos = koders_array.filter(function(element){
    return element.hobbies.indexOf("Videojuegos") !== -1;
}).forEach(function(element){
    console.log(element.nombre);
});


// sumar un año a todos los koders
koders_array.forEach(function(element, index, array) {
    element.edad = element.edad + 1;
});



var car = {
    "color": "rojo",
    "model": "Rio"
}

for( key in car ){
    console.log(key);
}


var car_obj = {
    "color": "red",
    "brand": "KIA",
    "model": "Rio",
    getCar: function(){
        return this.brand + " " + this.model;
    }
};


*/

var person = {
    "firstName": "Jorge",
    "secondName": "Pablo",
    "apellidoPaterno": "de Buen",
    "apellidoMaterno": "Arizmendi",
    fullName: function(){
        return this.firstName + " " + this.secondName + " " + this.apellidoPaterno + " " + this.apellidoMaterno;
    }
}








