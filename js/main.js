"use strict";

let articles = document.querySelectorAll('.gallery__item');
let filter = document.querySelector('.btn__tags');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.tags === filter.value || filter.value === "none") {
      article.classList.remove('hidden');
    } else {
      article.classList.add('hidden');
    }
  }
};

let itemMessage = document.querySelector(".form-main__message-input");
let btnWriteMe = document.querySelector(".btn__contact-js");

itemMessage.oninput = function () {
  if (itemMessage.value.length < 10 || itemMessage.value.length > 200) {
    itemMessage.style.color = "red";
    btnWriteMe.disabled = true;
  } else {
    itemMessage.style.color = "black";
    btnWriteMe.disabled = false;
  }
};
