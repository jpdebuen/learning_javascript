
// Ejercicio filter y map
/*
    var number_array = [1,2,3,4,5];

    var new_number_array = number_array.map(function(element, index, array){
        return element * 3;
    })

    var even_array = new_number_array.filter(function(element, index, array){
        return element % 2 === 0;
    })

    console.log(even_array);
*/



/*
// Objects

var koders_obj = {
    llave: valor,
    "one": "Diana",
    "two": "Carlos",
    "three": "Ema"
}

// para obtener a Carlos
koders_obj.one
koders_obj["one"]

// Object.keys(koders_obj) <--- pone todas las llaves en un arreglo
// Object.values(koders_obj) <--- pone todas los valores en un arreglo


    var carro = {
        color: "Rojo",
        marca: "Honda",
        Modelo: "Fit",
        Transmisión: "CVT"
    }


    var persona = {
        nombre: "Jorge",
        especie: "humano",
        etnicidad: "latino",
        nacionalidad: "mexicano",
        sexo: "masculino",
        edad: "23 años",
        fecha_de_nacimiento: "6 de enero de 1996",
        fecha_de_cumpleaños: "6 de enero",
        estatura: 185,
        peso: 75,
        color_de_cabello: "negro",
        color_de_ojos: "verde"
    }

*/

    var koders_array = [
        {
        'nombre': 'David',
        'edad': 22,
        'genero': 'M',
        'hobbies': [
            'Fotografia',
            'Viajar'
        ]
        },
        {
        'nombre': 'Jorge',
        'edad': 23,
        'genero': 'M',
        'hobbies': [
            'Videojuegos',
            'Lectura',
            'Dibujar'
        ]
        },
        {
        'nombre': 'Erick',
        'edad': 25,
        'genero': 'M',
        'hobbies': [
            'Caligrafia',
            'Videojuegos'
        ]
        },
        {
        'nombre': 'Diana',
        'edad': 27,
        'genero': 'F',
        'hobbies': [
            'Hardware',
            'Videojuegos'
        ]
        },
        {
        'nombre': 'Rodo',
        'edad': 32,
        'genero': 'M',
        'hobbies': [
            'Musica',
            'Programacion'
        ]
        }
    ];

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
        var flag;
        return element.hobbies.forEach(function(element){
            
        })
    });

    console.log(koders_videojuegos);