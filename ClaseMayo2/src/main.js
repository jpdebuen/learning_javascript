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
        insertText("p", "vet-name");
        //location
        insertText("p", "location");


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