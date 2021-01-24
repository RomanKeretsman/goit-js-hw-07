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


btnCreateRef.addEventListener('click', render);
btnDeleteRef.addEventListener('click', () => {
  boxesRef.innerHTML = '';
});

function random_color() {
    return `rgb( ${Math.random() * 256} ,  ${
      Math.random() * 256
    } ,  ${Math.random() * 256})`
}

function create(item) {
    let num = 0;
    let px = 10;
    let boxArr = [];
    for (let i = 1; i <= item; i += 1) {
        num += 1;
        px += 10;
        let div = document.createElement('div');
        div.textContent = num;
        div.style.width = px + 'px';
        div.style.height = px + 'px';
        div.style.backgroundColor = random_color();
        boxArr.push(div);
    }
    boxesRef.append(...boxArr);
}

function render() {
  boxesRef.innerHTML = '';
  create(quantityRef.value);
}