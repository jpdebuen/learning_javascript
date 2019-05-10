//Sacar el CURP de una persona->

/*
function checkForSpace(element){
    if (element.includes(" ") === true){
        return element.split(" ").pop();
    }
}
??????



var person_array = [
    {
        "nombre": "Jorge",
        "aPaterno": "de Buen",
        "aMaterno": "Arizmendi",
        "fechaNacimiento": "1996-01-06",
        "genero": "hombre"
    },
    {
        "nombre": "Alan",
        "aPaterno": "Torres",
        "aMaterno": "Albion",
        "fechaNacimiento": "1990-04-08",
        "genero": "hombre"
    },
    {
        "nombre": "Francisco",
        "aPaterno": "Nuñez",
        "aMaterno": "Pedrajo",
        "fechaNacimiento": "1985-08-23",
        "genero": "hombre"
    }
]



function Person(nombre, aPaterno, aMaterno, fechaNacimiento, genero){
    this.nombre = nombre;
    this.aPaterno = aPaterno;
    this.aMaterno = aMaterno;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.getCURP = function (){
        return (
        this.aPaterno.slice(0,2).toUpperCase() + 
        this.aMaterno.charAt(0).toUpperCase() + 
        this.nombre.charAt(0).toUpperCase() + 
        this.fechaNacimiento.slice(2,4) + 
        this.fechaNacimiento.slice(5,7) + 
        this.fechaNacimiento.slice(8,10)
        );
    }
} 

person_array.forEach(function(obj){
    var new_person = new Person(obj.nombre, obj.aPaterno, obj.aMaterno, obj.fechaNacimiento, obj.genero);
    console.log(new_person.getCURP());
})


*/


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

divs_array.forEach




