
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


/*
function request() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
        obj = this.response
        console.log(JSON.parse(obj))
        buildStructure(this.response);
      }
    }
    xhttp.open('GET', 'https://ajaxkode.firebaseio.com/diana.json', true)
    xhttp.send(JSON.stringify(petObj))
  }
  

function buildPets(pet) {
    var allPets = ''
        var buildPet = ''
        buildPet +='<div class="card" style="width: 18rem;">'
        buildPet +='    <div class="card-body">'
        buildPet +='        <p class="card-text">'+ pet.name +'</p>'
        buildPet +='        <p class="card-text">'+ pet.sex +'</p>'
        buildPet +='        <p class="card-text">'+ pet.breed.breedName +'</p>'
        buildPet +='    </div>'
        buildPet +='</div>'
        
        allPets += buildPet
    document.getElementById('pets-wrapper').innerHTML = allPets;
}

  
function buildStructure(result) {
    var resObj = JSON.parse(result);
    console.table(resObj["-LdvRidGHCWTOddNt9W3"]);
    buildPets(resObj["-LdvRidGHCWTOddNt9W3"]);
}
*/

/* ECMAScript 6 */

/*
Palabras reservadas:

- const
- let




*/

const request = (url, method = 'GET', data = {}, callback) => {
    let config = {}
    if (method === 'GET') {
      config = {method}
    } else {
      let _data = JSON.stringify(data)
      config = { method, body: _data }
    }
  
    fetch(url, config)
    .then(res => res.json())
    .then(json => callback(json))
  }
  
  const buildPet = (
    age, 
    breed,
    name, 
    carnetPhoto,
  ) => {
    
      let pet = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${carnetPhoto}" alt="Card image cap">
          <div class="card-body">
            <h3 class="card-title">${name}</h3>
            <h3 class="card-subtitle">${breed}</h3>
            <p class="card-text">
              Mi mascota tiene ${age} años
            </p>
          </div>
        </div>
      `
      return pet
  }
  
  const buildStructure = (nameVet, locationVet, objVet) => {
    document.getElementById('title').innerHTML = nameVet
    document.getElementById('location').innerHTML = locationVet
    let keyArray = Object.keys(objVet)
    let builtPet = keyArray.map(key => {
      let {
        age,
        breed,
        name,
        carnetPhoto,
   
      } = objVet[key]
      return buildPet(age, breed, name, carnetPhoto)
    }).join(',')
    document.getElementById('pets-wrapper').innerHTML = builtPet
  }
  
  const retrieveData = ({ name, location, diana }) => {
    buildStructure(name, location, diana)
  }
  
  
  var getNID = (id) => document.getElementById(id)
  
  var retrieveDataFromForm = () => {
    let age = getNID('age').value
    let name = getNID('name').value
    let breed = getNID('breed').value
    let carnetPhoto = getNID('photo').value
    let petObj = { age, name, breed, carnetPhoto }
    request('https://ajaxkode.firebaseio.com/diana.json', 'POST', petObj, addData)
  }
  
  const addData = ({ name, location, diana }) => {
    request('https://ajaxkode.firebaseio.com/.json', 'GET', {}, retrieveData)
  }
  
  getNID('new-pet').addEventListener('submit', (event) => {
    event.preventDefault()
    retrieveDataFromForm()
  })
  
  request('https://ajaxkode.firebaseio.com/.json', 'GET', {}, retrieveData)
  