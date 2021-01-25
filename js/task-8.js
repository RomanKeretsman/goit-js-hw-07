// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const quantityRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector('[data-action="render"]');
const btnDeleteRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let px = 30;

btnCreateRef.addEventListener('click', createBoxes);
btnDeleteRef.addEventListener('click', destroyBoxes);


function random_color() {
  return `rgb( ${Math.random() * 256} ,  ${Math.random() * 256} ,  ${
    Math.random() * 256
  })`;
}

function createBoxes() {
  const childrenCount = quantityRef.value;
  let boxArr = [];
  for (let i = 0; i < childrenCount; i += 1) {
    const div = document.createElement('div');
    div.style.width = px + 'px';
    div.style.height = px + 'px';
    px += 10;
    div.style.backgroundColor = random_color();
    boxArr.push(div);
  }
  boxesRef.append(...boxArr);
  quantityRef.value = '';
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  quantityRef.value = '';
  px = 30;
}