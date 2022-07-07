// Сумма в диапазоне
		
// Напишите 2 функции.
// Первая функция генерирует массив на N рандомных чисел в диапазоне от {A} до {B} и возвращает его 
// Т.е. принимает 3 параметра и {A} не может быть больше чем {B}
// пераметры {A} и {B} запросить у пользователя
// Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]

// Вторая функция принимает массив рандомных чисел, индекс {С} c которого начинать подсчет и индекс {D} ПО который считать
// индексы {С} и {D} запросить у пользователя
// Должна быть валидация индексов
//     - Чтобы не было отрицательных чисел
//     - Чтобы индекс не выходил за рамки допустимых индексов
//     - Чтобы первый индекс был меньше или равен второму

// Пример вывода в консоль:
// Массив: [.....] сгенерированный от {A} до {B}
// Сумма чисел в диапазоне от индекса {С} по индекс {D} равна: 10 

var paramA = +prompt("Enter a number, that is less then b");
var paramB = +prompt("Enter a number, that is biger then a");



function MinMaxRandom (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSmth (a, b, num){
    if (a > b) {
        alert("You entered wrong parameters. Refresh page and try again");
    }

    let myArr = [];
    for (let i = 0; i < num; i++){
        var getRandom = MinMaxRandom(a, b);
        myArr.push(getRandom);
    }
    return myArr;
}

console.log(doSmth(paramA, paramB, 10));

var paramC = +prompt("Enter parameter C");
var paramD = +prompt("Enter parameter C");

function sumOfNumbers (c, d, arr){
    if (c <= 0 || d <= 0){
        alert("Wrong parametres");
        return;
    }
    if (d >= arr.length || c > d){
        alert("Wrong parameter. Try again");
        return;
    }
    
}