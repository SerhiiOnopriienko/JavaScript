// 4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
// 		Число, которое должна вернуть функция вводит пользователь.
// 		Для решения используйте цикл.

// 		Пользователь ввел: 6
// 		Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
// 		Функция должна вернуть: 8

let zero = 0;
let one = 1;
let current;
function fibo(n){
    for (let i = 0; i <= n - 2; i++){
        current = zero + one;
        zero = one;
        one = current;
    }
    
    return current;
}

n = +prompt("Enter a positive number");
console.log(fibo(n));