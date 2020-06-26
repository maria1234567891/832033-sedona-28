var link = document.querySelector(".search");
var popup = document.querySelector(".popup");
var form = document.querySelector(".form");
var arrival_date = document.querySelector(".arrival_date_input");
var departure_date = document.querySelector(".departure_date_input");
var adults_input = document.querySelector(".adults_input");
var children_input = document.querySelector(".children_input");
var body = document.querySelector(".page_body");
var isStorageSupport = true;
var storage_adults = "";
var storage_children = "";

try {
  storage_adults = localStorage.getItem("adults");
  storage_children = localStorage.getItem("children");
  adults_input.value = storage_adults;
  children_input.value = storage_children;
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (event){
    event.preventDefault();
    if(popup.classList.contains("hidden")){
      popup.classList.remove("hidden");
    if (storage_adults) {
      adults_input.value = storage_adults;
      children_input.value = storage_children;
    }
  }
  else{
    popup.classList.add("hidden");
  }
});
body.addEventListener("click", function (evt){
  if(!popup.classList.contains("hidden")){
      if(evt.target != link){
      popup.classList.add("hidden");
    }
  }
});
popup.addEventListener("click", function (evt){
  evt.stopPropagation();
});
form.addEventListener("submit", function(evt){
  if( !arrival_date.value || !departure_date.value || !adults_input.value || !children_input.value){
    evt.preventDefault();
    console.log("Нужно ввести даты поездки и количество взрослых и детей");
  }
  else{
    localStorage.setItem("adults", adults_input.value);
    localStorage.setItem("children", children_input.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("hidden")) {
      evt.preventDefault();
      popup.classList.add("hidden");
    }
  }
});
