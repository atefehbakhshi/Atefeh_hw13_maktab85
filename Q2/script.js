"use strict";
// Lists
const sideLeft = document.querySelector(".side-left");
const sideRight = document.querySelector(".side-right");
// Buttons
const allButtons = document.getElementsByTagName("button");
const rightToAll = document.querySelector(".right-to-all");
const rightToChecked = document.querySelector(".right-to-checked");
const leftToChecked = document.querySelector(".left-to-checked");
const leftToAll = document.querySelector(".left-to-all");

rightToAll.addEventListener("click", () => {
  activeButtons(allButtons);
  let list = [...sideLeft.children];
  list.forEach((li) => sideRight.insertAdjacentElement("beforeend", li));
  checkEmptyList(rightToAll, rightToChecked, rightToAll, rightToChecked);
});

leftToAll.addEventListener("click", () => {
  activeButtons(allButtons);
  let list = [...sideRight.children];
  list.forEach((li) => sideLeft.insertAdjacentElement("beforeend", li));
  checkEmptyList(leftToAll, leftToChecked, leftToAll, leftToChecked);
});

rightToChecked.addEventListener("click", () => {
  let checkedList = [...document.getElementsByTagName("input")];
  checkedList.forEach((item) => {
    if (item.checked) {
      activeButtons(allButtons);
      sideRight.insertAdjacentElement("beforeend", item.parentNode);
      item.checked = false;
    }
  });

  let list = [...sideLeft.children];
  if (list.length === 0)
    checkEmptyList(rightToAll, rightToChecked, rightToAll, rightToChecked);
});

leftToChecked.addEventListener("click", () => {
  let checkedList = [...document.getElementsByTagName("input")];
  checkedList.forEach((item) => {
    if (item.checked) {
      activeButtons(allButtons);
      sideLeft.insertAdjacentElement("beforeend", item.parentNode);
      item.checked = false;
    }
  });

  let list = [...sideRight.children];
  if (list.length === 0)
    checkEmptyList(leftToAll, leftToChecked, leftToAll, leftToChecked);
});

function activeButtons(buttons) {
  let buttonsList = [...buttons];
  buttonsList.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.classList.remove("disabled");
  });
}

function checkEmptyList(btn1, btn2, btn3, btn4) {
  btn1.setAttribute("disabled", true);
  btn2.setAttribute("disabled", true);
  btn3.classList.add("disabled");
  btn4.classList.add("disabled");
}
