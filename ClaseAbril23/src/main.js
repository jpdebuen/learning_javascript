var divs_array = [
    {
        "height": "100px",
        "width": "30px",
        "backgroundColor": "red"
    },
    {
        "height": "100px",
        "width": "30px",
        "backgroundColor": "peru"
    },
    {
        "height": "100px",
        "width": "30px",
        "backgroundColor": "green"
    },
    {
        "height": "100px",
        "width": "30px",
        "backgroundColor": "yellow"
    },
    {
        "height": "100px",
        "width": "200px",
        "backgroundColor": "blue"
    }
]


var divs = document.getElementsByTagName("div");

/*
for (var i = 0; i = divs.length - 1; i++){
    divs[i].push(divs_array[i]);
}
*/



var car_array = [
    ["Honda", "Blanco", "CVT", "2020", "$280,000.00"],
    ["Toyota", "Rojo", "Manual", "2008", "$80,000.00"],
    ["KIA", "Negro", "Automático", "2019", "$250,000.00"]
]



function Car(marca, color, transmision, anio, precio){
    this.marca = marca;
    this.color = color;
    this.transmision = transmision;
    this.anio = anio;
    this.precio = precio;
    this.getPrecio = function(){
        return "El precio de este auto es: " + this.precio;
    };
    this.getTransmision = function(){
        return "La transmisión de este auto es: " + this.transmision;
    };
    this.getMarca = function(){
        return "La marca de este auto es: " + this.marca;
    };
    this.getData = function(){
        return "El auto tiene las siguientes especificaciones: " + this.getPrecio() + ", " + this.getTransmision() + ", " + this.getMarca();
    };
}




car_array.forEach(function(element){
    var new_car = new Car(element[0], element[1], element[2], element[3], element[4]);
    console.log(new_car.getData());
})


//console.log(new_car.getData());


/*

function Car(array){
    this.marca = array[forEach(function(element){
        return element[0];].
    });
    this.transmisión = array.forEach(function(element){
        return element[1];
    });
    this.color = array.forEach(function(element){
        return element[2];
    });
    this.anio = array.forEach(function(element){
        return element[3];
    });
    this.precio = array.forEach(function(element){
        return element[4];
    });
    this.getData = function(){
        return "El auto tiene las siguientes especificaciones: " + this.marca + " " + this.transmisión + " " + this.modelo;
    };
}
*/