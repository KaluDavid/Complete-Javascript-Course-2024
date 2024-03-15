"use strict";

/*
 So we're target the 
 1) The modal 
 2)Close-modal
 3) show-modal
 4) overlay
*/

// store them in a var
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");


// showModal
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};


// closeModal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// open modal
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", showModal);


//   close modal
btnCloseModal.addEventListener("click", closeModal);


// close overlay
overlay.addEventListener("click", closeModal);
