var car = {
    "brand": "Honda",
    "model": {
        "line": "Fit",
        "submodel": "Fun",
        "year": 2018
    },
    "color": {
        "name": "white",
        "hex": "FFFFFF",
        "finish": "pearlescent"
    },
    "doors": 5,
    "price": 280000,
}



function changes(element){
    element.style.backgroundColor = "blue";
    element.innerHTML = "Hello";
}

/*
function changeClass(element){
    var classes = variable.classList;
    if(classes.contains("on")){
        element.classList.remove("on");
        element.classList.add("off");
        element.innerHTML = "OFF";
    }else{
        element.classList.remove("off");
        element.classList.add("on");
        element.innerHTML = "ON";
    }
}
*/

function toggleClass(element){
    element.classList.toggle("off");
}


function logChanges(element){
    console.log(element.value);
}

// 1USD = 19.03MXN

function toMXN(value){
    return value*19.03;
}

function toUSD(value){
    return value/19.03;
}

function autoConversionMXN(element){
    document.getElementById("usd_number").value = toMXN(element.value);
}

function autoConversionUSD(element){
    document.getElementById("mxn_number").value = toUSD(element.value);
}

/* function toMXN(value) {
  var element = document.getElementById('number_one')
  var result = value * 19.03
  element.value = result
}

function toUSD(value) {
  var element = document.getElementById('number_two')
  var result = value / 19.03
  element.value = result
}

function changes(moneda, element) {
  var value = element.value
  if(moneda === 'MXN') {
    toUSD(value)
  } else {
    toMXN(value)
  }
} */