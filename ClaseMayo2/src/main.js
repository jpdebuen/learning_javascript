
var petObj = {
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg",
    "name": "Shanti",
    "sex": "Female",
    "breed":{
        "breedName": "Blue Heeler",
        "pedigree": true
    },
    "birthDate": "09/09/2005",
    "color": "brown",
    "owners":[
        {
        "name": "Jorge",
        "address": "Paseo de los Tamarindos 218",
        "phone": "4422490259",
        "email": "jp.debuen@gmail.com"
        },
    ],
    "appointment":{
        "date": "05/15/2019",
        "time": "16:00",
        "recurrent": "true"
    },
    "vaccines":[
        {
            "name": "Canine Influenza Virus-H3N2",
            "applied": true
        },
        {
            "name": "Bordatella",
            "applied": true
        },
        {
            "name": "Canine Influenza Virus-H3N8",
            "applied": true
        },
        {
            "name": "Rabies",
            "applied": true
        },
    ],
    "sterilized": true
}

function request() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
          console.log(this.response)
        buildStructure(this.response["-LdvRidGHCWTOddNt9W3"]);
      }
    }
    xhttp.open('GET', 'https://ajaxkode.firebaseio.com/jorge.json', true)
    xhttp.send(/* JSON.stringify(petObj) */)
  }
  
  
function buildPets(pet) {
    var allPets = ''
        var buildPet = ''
        buildPet +='<div class="card" style="width: 18rem;">'
        buildPet +='    <div class="card-body">'
        buildPet +='      <p class="card-text">'+ pet.name +'</p>'
        buildPet +='      <p class="card-text">'+ pet.sex +'</p>'
        buildPet +='      <p class="card-text">'+ pet.breed.name +'</p>'
        buildPet +='    </div>'
        buildPet +='  </div>'
        
        allPets += buildPet
    document.getElementById('pets-wrapper').innerHTML = allPets;
}

  
function buildStructure(result) {
    var resObj = JSON.parse(result);
    console.table(resObj["-LdvRidGHCWTOddNt9W3"]);
    buildPets(resObj["-LdvRidGHCWTOddNt9W3"]);
}


/* ECMAScript 6 */

/*
Palabras reservadas:

- const
- let

*/