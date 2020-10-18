"use strict";

let myLke = false;
let btnLikes = document.querySelector(".likes__link");
let likesCount = document.querySelector(".likes__count");

btnLikes.onclick = function () {
  let currentLikes = +likesCount.textContent;
  if (myLke) {
    likesCount.textContent = --currentLikes;
  } else {
    likesCount.textContent = ++currentLikes;
  }
  myLke = !myLke;
  btnLikes.classList.toggle("likes__link_my");
};

let itemMessage = document.querySelector(".form-post__message-input");
let btnWriteMe = document.querySelector(".btn__post-js");

itemMessage.oninput = function () {
  if (itemMessage.value.length < 10 || itemMessage.value.length > 200) {
    itemMessage.style.color = "red";
    btnWriteMe.disabled = true;
  } else {
    itemMessage.style.color = "black";
    btnWriteMe.disabled = false;
  }
};

let formPost = document.querySelector(".comments__form");
let btnPost = document.querySelector('.btn__post-js');
let listComments = document.querySelector(".comments__list");
let itemName = document.querySelector(".form-post__name-input");
let itemEmail = document.querySelector(".form-post__email-input");

function createEvement (nameTag, classes, content = undefined) {
  let newItem = document.createElement(nameTag);
  for (let className of classes) {
    newItem.classList.add(className);
  }
  if (content !== undefined) {
    newItem.textContent = content;
  }
  return newItem;
}

formPost.onsubmit = function(evt) {

  evt.preventDefault();

  let newComment = createEvement('li', ['comments__item', 'comment']);
  let commentWrap = createEvement('div', ['comment__wrap']);

  commentWrap.append(createEvement('img', ['comment__avatar']));
  commentWrap.append(createEvement('p', ['comment__name'], itemName.value));
  newComment.append(commentWrap);
  newComment.append(createEvement('div', ['comment__text'], itemMessage.value));

  listComments.append(newComment);

  btnWriteMe.disabled = true;

};
