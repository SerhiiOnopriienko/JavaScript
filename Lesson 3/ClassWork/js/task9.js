// 9. Давайте произведём 5 операций с массивом.

// 			9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
// 			9.2 Добавьте «Рок-н-ролл» в конец.
// 			9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 			9.4 Удалите первый элемент массива и покажите его.
// 			9.5 Вставьте «Рэп» и «Регги» в начало массива.

var styles = ["Jaz", "Blues"];
styles.push("Rock-n-roll");

var firstElement = styles.shift();

styles.unshift("Rap", "Reggae");

styles.splice(styles.length / 2, 1, "Classic");
console.log("Deleted element is " + firstElement);

console.log(styles);