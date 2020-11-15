'use strict';
/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
 Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

let nameInput = document.querySelector('#name-input');
let nameOutput = document.querySelector('#name-output');

nameInput.oninput = function () {
    if (nameInput === '') {
        nameInput.innerHTML = 'незнакомец';
    } else { nameOutput.innerHTML = nameInput.value;} 
}