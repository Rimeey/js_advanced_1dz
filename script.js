'use strict'

const ul = document.querySelector('ul');

console.dir(ul);

// 1. Вивести останній підпорядкований елемент та його тип
console.dir(ul.lastElementChild); // object
console.dir(ul.children[4]); // object

// 2. Вивести наступний елемент, що слідує за відібраним та вказати його тип
console.dir(ul.nextElementSibling); // object

// 3. Вивести зміст першого підпорядкованого елементу та вказати його тип
console.dir(ul.firstElementChild.textContent); // string

// 4. Вивести батьківський елемент відібраного та вказати його тип
console.dir(ul.parentElement); // object

// 5. Вивести назву класу батьківського елементу, та вказати його тип
console.dir(ul.parentElement.className); // string

// 6. Вивести всі підпордковані елементи та визначити тип властивості, що їх містить
console.dir(ul.children) // object

// 7. Вивести інформацію про кількість підпорядкованих елементів (двома способами) та їх типи
console.dir(ul.childElementCount); // number
console.dir(ul.children.length); // number

// 8. Вивести всі підпорядковані по відношенню до батьківського елементи
console.dir(ul.parentElement.children);

// 9. Вивести попередній по відношенню до відібраного елемент та вказати його тип
console.dir(ul.previousElementSibling); // object

// 10. Вивести наступний по відношенню до відібраного елемент та вказати його тип
console.dir(ul.nextElementSibling); // object

// 11. Вивести властивості, де вказано назву відібраного елемента
console.dir(ul.tagName);

// 12. Вивести другий підпорядкований елемент
console.dir(ul.children[1]);
