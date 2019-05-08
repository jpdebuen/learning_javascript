/*var postObject = {
  'name': 'Raynor',
  'breed': 'Black Cat',
  'age':'4 años'
}*/

//$("").val();

$("#submit-button").click(()=>{
  let name = $("#pet-name").val();
  let breed = $("#pet-breed").val();
  let age = $("#pet-age").val();
  let petObject = {name,breed,age};
  console.log(petObject);
  addPet(petObject);
})

$("#delete-button").click((event)=>{
  let id = getIDHash($(event.target));
  console.log(id);
  deleteData(id);
})

/*método post*/
const addPet = (petObject)=>{
  $.post( "https://jquerycrud-ed8dc.firebaseio.com/jorge.json", /*URL*/
    JSON.stringify(petObject), /*Objeto a postear*/
    function( data ) { /*callback*/
      console.log( data);
  }, "json");
}

/*método get*/
function getData(){
  $.ajax({
      url: "https://jquerycrud-ed8dc.firebaseio.com/jorge.json",
      type: "GET",
      success: function(response){
          printData(response)
      }
  });
}

/*Método Update*/
function updateData(updatedObject){
    $.ajax({
       url: 'https://jquerycrud-ed8dc.firebaseio.com/jorge/-LeKIMW0UYTrqZocmq9v.json',
       type: 'PUT',
       data: JSON.stringify(updatedObject),
       success: function(response) {
         console.log(response)
       }
    });
}

/*Método delete*/
function deleteData(idHash){
  $.ajax({
     url: `https://jquerycrud-ed8dc.firebaseio.com/jorge/${idHash}.json`,
     type: 'DELETE',
     success: function(response) {
       console.log(response);
     }
  });
}

function printData(dataToPrint) {
  $.each(dataToPrint,(key,value)=>{
    console.log(`key ${key}, value ${value}, name ${value.name}, breed: ${value.breed}`)
    $(".data-wrapper").append(
        `<div class="data-card">
          <p>El nombre de mi mascota es: <span>${value.name}</span></p>
          <p>Su raza es: <span>${value.breed}</span></p>
          <p>y tiene <span>${value.age}</span></p>
          <div id="delete-button" class="btn">${key}</div>
        </div>`
      )
  })
}

function getIDHash(){
  $.ajax({
      url: "https://jquerycrud-ed8dc.firebaseio.com/jorge.json",
      type: "GET",
      success: function(response){
          printIDHash(response);
      }
  });
}

function printIDHash(idHash) {
  $.each(idHash,(key,value)=>{
    console.log(`${key}`);
  })
}