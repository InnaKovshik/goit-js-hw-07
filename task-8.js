'use strict';

const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
render.addEventListener("click", getRender);
destroy.addEventListener("click", destroyBoxes);


function getRender() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}
/*Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes. */
function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

/*Имеет случайный rgb цвет фона */
function random() {
  return Math.floor(Math.random() * 256);
}

/*Создай функцию destroyBoxes(), которая очищает div#boxes. */
function destroyBoxes() {
  boxes.innerHTML = "";
}
