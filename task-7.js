'use strict';

/*Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
 В результате при перетаскивании ползунка будет меняться размер текста.*/

const sizeInput = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

sizeInput.oninput = function() {
  textSize.style.fontSize = sizeInput.value + 'px'
}