"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
///////////////////////////////////////
// LECTURES
/*
// LEC: add, remove, edit
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");
console.log(allSection);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements
// .insertAdjanceHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = `We're using cookies to improved functionality and analytics`;
message.innerHTML = `We're using cookies to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
console.log(message);

//  This is possible too
// header.before(message);
// header.after(message);

// Delete Element
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// LEC: Styles
message.style.backgroundColor = "#37383d";
message.style.width = "100vw";

console.log(message.style.backgroundColor);
console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// LEC: Attributies
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = `Beautiful minimalist Logo`;

// NoNStandard
// console.log(logo.designer); VVV
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", `Bankist`);

console.log(logo.src); // http://127.0.0.1:8080/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.getAttribute("src")); // img/logo.png

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // contains not includes

// Don't use
logo.className = "Jonas";
*/
////////////////////////////////////////

// LEC: Smooth Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current Scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/ Width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////

// LEC: typeof Events and eventhandler

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", function (e) {
  console.log(e);
  alert("addEventListener: Great your're reading the header");
});
