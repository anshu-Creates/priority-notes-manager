let main = document.querySelector(".notes");
let add = document.querySelector(".add");
let form = document.querySelector("form");
let close = document.querySelector(".close");
let init = document.querySelector(".init");
let norush = document.querySelector(".norush");
let important = document.querySelector(".important");
let emergency = document.querySelector(".emergency");
let urgent = document.querySelector(".urgent");

function hideNote() {
  form.style.display = "flex";
  main.style.display = "none";
}

function hideForm() {
  form.style.display = "none";
  main.style.display = "flex";
}

function createCard() {
  let div = document.createElement("div");
  div.setAttribute("class", category);
  div.classList.add("card");
  document.body.querySelector(".main").prepend(div);

  let h1 = document.createElement("h1");
  h1.innerText = naam;
  document.body.querySelector(".card").append(h1);

  let p1 = document.createElement("p");
  p1.setAttribute("class", "p1");
  p1.innerText = "Hometown : ";
  document.body.querySelector(".card").append(p1);
  let span1 = document.createElement("span");
  span1.innerText = homeTown;
  document.body.querySelector(".card").querySelector(".p1").append(span1);

  let p2 = document.createElement("p");
  p2.setAttribute("class", "p2");
  p2.innerText = "Purpose : ";
  document.body.querySelector(".card").append(p2);
  let span2 = document.createElement("span");
  span2.innerText = purpose;
  document.body.querySelector(".card").querySelector(".p2").append(span2);

  let div1 = document.createElement("div");
  div1.setAttribute("class", "div1");
  document.body.querySelector(".card").append(div1);

  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "call");
  btn1.classList.add("button");
  btn1.setAttribute("onclick", `window.location.href="tel:${phone}""`);
  btn1.innerText = "Call";
  document.body.querySelector(".card").querySelector(".div1").append(btn1);

  let btn2 = document.createElement("button");
  btn2.setAttribute("class", "msg");
  btn2.classList.add("button");
  btn1.setAttribute("onclick", `window.location.href="mailto:${email}""`);
  btn2.innerText = "Email";
  document.body.querySelector(".card").querySelector(".div1").append(btn2);

  let btn3 = document.createElement("button");
  btn3.setAttribute("class", "delete");
  btn3.classList.add("button");
  btn3.innerText = "Delete";
  document.body.querySelector(".card").querySelector(".div1").append(btn3);

  console.log("Notes Created..");
}

function clear() {
  init.style.display = "none";
}

add.addEventListener("click", hideNote);

close.addEventListener("click", hideForm);

form.addEventListener("submit", function (data) {
  data.preventDefault();
  naam = data.target[0].value;
  homeTown = data.target[1].value;
  purpose = data.target[2].value;
  phone = data.target[3].value;
  email = data.target[4].value;
  category = data.target[5].value;

  hideForm();
  createCard();
  clear();
  form.reset();
});

function black() {
  let cards = document.querySelectorAll(".card");
  let cardsArr = [...cards];
  if (cardsArr.length != 0) {
    let cardExists = document.querySelector(".black");
    if (!cardExists) {
      init.style.display = "initial";
    } else {
      init.style.display = "none";
    }
    cards.forEach(function (data) {
      if (data.className !== "black card") {
        data.style.display = "none";
      } else {
        data.style.display = "initial";
      }
    });
  }
}

function violet() {
  let cards = document.querySelectorAll(".card");
  let cardsArr = [...cards];
  if (cardsArr.length != 0) {
    let cardExists = document.querySelector(".violet");
    if (!cardExists) {
      init.style.display = "initial";
    } else {
      init.style.display = "none";
    }
    cards.forEach(function (data) {
      if (data.className !== "violet card") {
        data.style.display = "none";
      } else {
        data.style.display = "initial";
      }
    });
  }
}

function blue() {
  let cards = document.querySelectorAll(".card");
  let cardsArr = [...cards];
  if (cardsArr.length != 0) {
    let cardExists = document.querySelector(".blue");
    if (!cardExists) {
      init.style.display = "initial";
    } else {
      init.style.display = "none";
    }
    cards.forEach(function (data) {
      if (data.className !== "blue card") {
        data.style.display = "none";
      } else {
        data.style.display = "initial";
      }
    });
  }
}

function orange() {
  let cards = document.querySelectorAll(".card");
  let cardsArr = [...cards];
  if (cardsArr.length != 0) {
    let cardExists = document.querySelector(".orange");
    if (!cardExists) {
      init.style.display = "initial";
    } else {
      init.style.display = "none";
    }
    cards.forEach(function (data) {
      if (data.className !== "orange card") {
        data.style.display = "none";
      } else {
        data.style.display = "initial";
      }
    });
  }
}

norush.addEventListener("click", black);
emergency.addEventListener("click", orange);
urgent.addEventListener("click", blue);
important.addEventListener("click", violet);
