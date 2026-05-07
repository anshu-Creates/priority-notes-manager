let main = document.querySelector(".notes");
let add = document.querySelector(".add");
let all = document.querySelector(".all");
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

add.addEventListener("click", hideNote);

close.addEventListener("click", hideForm);

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
  btn1.addEventListener("click", function(){
    window.location.href = `tel:${phone}`;
  });
  btn1.innerText = "Call";
  document.body.querySelector(".card").querySelector(".div1").append(btn1);

  let btn2 = document.createElement("button");
  btn2.setAttribute("class", "msg");
  btn2.classList.add("button");
  btn2.addEventListener("click", function(){
    window.location.href = `mailto:${email}`;
  });
  btn2.innerText = "Email";
  document.body.querySelector(".card").querySelector(".div1").append(btn2);

  let btn3 = document.createElement("button");
  btn3.setAttribute("class", "delete");
  btn3.classList.add("button");
  btn3.innerText = "Delete";
  btn3.addEventListener("click", function () {
    document.body.querySelector(".main").removeChild(div);
    let cards = document.querySelectorAll(".card");
    if (cards.length == 0) {
      init.style.display = "initial";
    } else {
      init.style.display = "none";
    }
  });
  document.body.querySelector(".card").querySelector(".div1").append(btn3);
}

function clear() {
  init.style.display = "none";
}

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

function showAll() {
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (data) {
    data.style.display = "initial";
  });
  if (cards.length == 0) {
    init.style.display = "initial";
  } else {
    init.style.display = "none";
  }
  norush.removeAttribute("style");
  emergency.removeAttribute("style");
  urgent.removeAttribute("style");
  important.removeAttribute("style");
}

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
  norush.style.boxShadow = "inset black 0px 0px 10px 0px";
  emergency.removeAttribute("style");
  urgent.removeAttribute("style");
  important.removeAttribute("style");
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
  important.style.boxShadow = "inset violet 0px 0px 10px 0px";
  emergency.removeAttribute("style");
  urgent.removeAttribute("style");
  norush.removeAttribute("style");
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
  urgent.style.boxShadow = "inset blue 0px 0px 10px 0px";
  emergency.removeAttribute("style");
  norush.removeAttribute("style");
  important.removeAttribute("style");
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
  emergency.style.boxShadow = "inset orange 0px 0px 10px 0px";
  norush.removeAttribute("style");
  urgent.removeAttribute("style");
  important.removeAttribute("style");
}

all.addEventListener("click", showAll);
norush.addEventListener("click", black);
emergency.addEventListener("click", orange);
urgent.addEventListener("click", blue);
important.addEventListener("click", violet);
add.addEventListener("click", showAll);
