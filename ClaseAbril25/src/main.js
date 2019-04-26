
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

var node = document.createElement("h1");
var txt = document.createTextNode("Create World");

node.appendChild(txt);



var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "h2",
            "text": "Hello"
        },
        {
          "tag": "h2",
          "text": "World"
        },
        {
          "tag": "p",
          "text": "holi"
        },
        {
          "tag": "span",
          "text": "ontas?"
        }
    ]
  }
  
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag)
    var textElement = document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child)
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()

  */


var nodeObj = {
    "tag": "div",
    "groups": [
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        },
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        },
        {
            "tag": "ul",
            "students": [
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                },
                {
                    "tag": "li",
                    "name": "Student"
                }
            ]
        }
    ]
}


function createSchool(tag){
    return document.createElement(tag);
}

function createGroups(groups){
    var element = document.createElement(groups.tag);
    groups.students.forEach(function(student){
        var studentNode = createStudents(student);
        element.appendChild(studentNode);
    });
    return element;
}

function createStudents(students){
    var element = document.createElement(students.tag);
    var studentElement = document.createTextNode(students.name);
    element.appendChild(studentElement);
    return element;
}

function createStructure(nodeObj){
    var schoolNode = createSchool(nodeObj.tag);
    nodeObj.groups.forEach(function(groups){
        var groupsNode = createGroups(groups);
        schoolNode.appendChild(groupsNode);
    });
    return schoolNode;
}

function init(){
    var structureNode = createStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}
  
init()