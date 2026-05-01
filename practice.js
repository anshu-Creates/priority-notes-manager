

let ui = document.querySelector(".notes");
let add = document.querySelector(".add");
let form = document.querySelector("form");
let close = document.querySelector(".close");

function hideNote() {
  form.style.display = "flex";
  ui.style.display = "none";
}

function hideForm() {
  form.style.display = "none";
  ui.style.display = "flex";
}


add.addEventListener("click", hideNote);

close.addEventListener("click", hideForm);

form.addEventListener("submit", function(data){
  data.preventDefault();
  naam = data.target[0].value;
  homeTown = data.target[1].value;
  purpose = data.target[2].value;
  phone = data.target[3].value;
  email = data.target[4].value;
  category = data.target[5].value;

  let div = document.createElement("div");
  div.setAttribute("class", category);
  document.body.querySelector(".main").prepend(div);

  let h1 = document.createElement("h1");
  h1.innerText = naam;
  document.body.querySelector(category).append(h1);


  let p1 = document.createElement("p");
  p1.setAttribute("class", "p1");
  p1.innerText = "Hometown : "
  document.body.querySelector(".card").append(p1);
  let span1 = document.createElement("span");
  span1.innerText = homeTown;
  document.body.querySelector(".card").querySelector(".p1").append(span1);
  


  let p2 = document.createElement("p");
  p2.setAttribute("class", "p2");
  p2.innerText = "Purpose : "
  document.body.querySelector(".card").append(p2);
  let span2 = document.createElement("span");
  span2.innerText = purpose;
  document.body.querySelector(".card").querySelector(".p2").append(span2);
  
  
  let div1= document.createElement("div");
  div1.setAttribute("class", "div1");
  document.body.querySelector(".card").append(div1);

  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "call");
  btn1.innerText = "Call";
  document.body.querySelector(".card").querySelector(".div1").append(btn1);

  let btn2 =document.createElement("button");
  btn2.setAttribute("class", "msg");
  btn2.innerText = "Message";
  document.body.querySelector(".card").querySelector(".div1").append(btn2);

  hideForm();

  

  console.log(naam, homeTown, purpose, phone, email, category);
})