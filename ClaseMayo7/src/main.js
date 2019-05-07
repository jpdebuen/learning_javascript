/*
$(".dd-button").on("click", ()=>{
  $("#dropdownOne").slideToggle("400");
});
*/

/*
$(".dd-button").on("click", ()=>{
  if ($("ul").hasClass("hide")){
    $("ul").removeClass("hide");
    $("ul").addClass("show");
  } else if ($("ul").hasClass("show")){
    $("ul").removeClass("show");
    $("ul").addClass("hide");
  }
});
*/



$(".btn").click((event)=>{
  $(event.target).closest(".card-wrapper").fadeOut(500, ()=>{
    $(event.target).closest(".card-wrapper").remove();
  })
});