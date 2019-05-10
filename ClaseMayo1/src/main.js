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
var p_element = document.createElement("p");
var new_p = document.createElement("p");
var div_element = document.createElement("div");

xhttp.onreadystatechange = function() {
    console.log(this.readyState, this.status)
    if( this.readyState === 4 && this.status === 200) {
        var objeto = (JSON.parse(this.responseText))
        console.log(objeto);
        //función 
        function insertText(key, id){
            var element = document.createElement(key);
            element.innerHTML = objeto.location;
            document.getElementById(id).appendChild(element)
        }
        //vet_name
        var p1 = document.createElement("p");
        p1.innerHTML = objeto.name;
        document.getElementById("vet-name").appendChild(p1);
        //location
        var p2 = document.createElement("p");
        p2.innerHTML = objeto.location;
        document.getElementById("location").appendChild(p2);        
        //pet-name
        var h5 = document.createElement("p");
        h5.innerHTML = objeto.pets[0].name;
        document.getElementById("pet-name").appendChild(h5);
        //pet-breed
        var p3 = document.createElement("p");
        p3.innerHTML = objeto.pets[0].breed;
        document.getElementById("pet-breed").appendChild(p3);
        //pet-owner-name
        var p4 = document.createElement("p");
        p4.innerHTML = objeto.pets[0].owner.name;
        document.getElementById("pet-owner-name").appendChild(p4);
        //pet-owner-phone
        var p5 = document.createElement("p");
        p5.innerHTML = objeto.pets[0].owner.phone;
        document.getElementById("pet-owner-name").appendChild(p5);


        insertText()


    } else if( this.status === 404 ) {
        console.log('NOPE')
    }
}

xhttp.open('GET', 'https://ajaxkode.firebaseio.com/.json', true)
xhttp.send()

function insertText(key, id){
    var element = document.createElement(key);
    element.innerHTML = objeto.location;
    document.getElementById(id).appendChild(element)
}



/* 
//vet name 
p_element.innerHTML = objeto.name;
document.getElementById("vet-name").appendChild(p_element);
//location
new_p.innerHTML = objeto.location;
document.getElementById("location").appendChild(new_p);
*/