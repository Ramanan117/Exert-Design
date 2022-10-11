"use strict";

// create a var for learn button
const btnlearn = document.querySelector(".learn");

//create buttons for linkedin for ram and vis
const btnlnram = document.querySelector(".inbtnram");
const btnlnvis = document.querySelector(".inbtnvis");

//create buttons for instagram for ram and vis
const btninsram = document.querySelector(".insbtnram");
const btninsvis = document.querySelector(".insbtnvis");

//create button for submit
const btnsubmit = document.querySelector(".send");

//getting screens height and width
const h = document.documentElement.clientHeight;
//const w = document.documentElement.clientWidth;

//LEARN MORE BUTTON
btnlearn.addEventListener("click", function () {
  window.scrollBy(0, h);
});

//SOCIAL MEDIA BUTTONS
btnlnram.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/ramanan-m-108886204", "_blank");
});
btnlnvis.addEventListener("click", function () {
  window.open(" https://www.linkedin.com/in/vishal-j-m-a453b0211/ ", "_blank");
});

btninsram.addEventListener("click", function () {
  window.open(
    " https://instagram.com/ramanan_manikantan?igshid=YmMyMTA2M2Y= ",
    "_blank"
  );
});
btninsvis.addEventListener("click", function () {
  window.open(
    " https://instagram.com/vishal_j_m?igshid=YmMyMTA2M2Y= ",
    "_blank"
  );
});

//EMAIL
btnsubmit.addEventListener("click", function () {
  let msg = document.querySelector(".inmail").value;
  document.querySelector(".tnq").textContent =
    " Go and Create your own webpage " + msg + "." + " Learn More...";
  document.querySelector(".inmail").value = "";
});
