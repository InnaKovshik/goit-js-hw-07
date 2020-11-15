'use strict';
/*Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.' */
/*Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */


const CategoriesLi = document.querySelectorAll('li.item');
console.log(`В списке ${CategoriesLi.length} категории.`);
  
const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};



