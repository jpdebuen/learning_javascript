/*
setTimeout(function(){
    console.log("Hello");
}, 3000)

var interval = setInterval(function(){
    console.log("Hellooou");
}, 3000)
*/


        //document.querySelectorAll("#time").innerHTML = time;



function startTimer(seconds, minutes){
    var timer = (setInterval(function(){
        if(seconds === 0){
            clearInterval(timer);
        };
        console.log(seconds);
        seconds--;
    }, 1000));
}

/*
function startTimer(seconds, minutes){
    var timer = (setInterval(function(){
        if(seconds === 0){
            minutes--
            //clearInterval(timer);
        };
        console.log("0" + minutes + ":" + seconds);
        seconds--;
    }, 1000));
}
*/


var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    console.log(this.readyState, this.status)
    if( this.readyState === 4 && this.status === 200) {
        var objeto = (JSON.parse(this.responseText))
        console.log(objeto)
        //vet name
        var pet_name = document.createElement("p")
        pet_name.innerHTML = objeto.name;
        document.getElementById("vet-name").appendChild(pet_name)
        //location
        document.createElement("p").innerHTML = objeto.location;
        document.getElementById("vet-name").appendChild(document.createElement("p"))
    } else if( this.status === 404 ) {
        console.log('NOPE')
    }    
}

xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
xhttp.send()

function insertText(key, id){
    document.createElement("p").innerHTML = objeto.location;
    document.getElementById("vet-name").appendChild(document.createElement("p"))
}

/*
function elFeoObjeto() {
    xhttp.onreadystatechange = function() {
        console.log(this.readyState, this.status)
        if( this.readyState === 4 && this.status === 200) {
            var respuesta = (JSON.parse(this.responseText))
            console.log(respuesta);
            document.write(respuesta.name + (' nuestro domicilio es: ') + respuesta.location + (' ') + respuesta.pets[0].breed + (' ') );    
        
            
        } else if( this.status === 404 ) {
            console.log('NOPE')
        }
    }
}

elFeoObjeto( )

xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
xhttp.send()
*/