
/*
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByTagName("ul"))
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("even"))
console.log(document.getElementsByTagName("li")[3])
*/


/*
var cont_divs = document.getElementsByClassName("cont");
for (var i = 0; i <= cont_divs.length - 1; ++i){
 cont_divs[i].style.margin = '100px';
}
*/

/*
var li_collection = document.getElementsByTagName("li");

for (var i = 0; i <= li_collection.length - 1; ++i){
  li_collection[i].style.color = 'red';
}
*/



var node = document.createElement("h1");
var txt = document.createTextNode("Create World");

node.appendChild(txt);


var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "h2",
            "text": "Hello"
        }
    ]
}