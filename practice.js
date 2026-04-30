
let ui = document.querySelector(".notes");
let add = document.querySelector(".add");
let form = document.querySelector("form");
let close = document.querySelector(".close");


add.addEventListener("click", function() {
  form.style.display = "flex";
  ui.style.display = "none";
});

close.addEventListener("click", function() {
  form.style.display = "none";
  ui.style.display = "flex";
})