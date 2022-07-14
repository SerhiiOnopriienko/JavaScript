// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let sign = prompt ("Chose operation (+, -, *, /");
let result;

function calculate(){
    if (isNaN(a) || isNaN(b)){
        console.log("Error");
    } else {
        switch (sign){
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            default:
                console.log("Wrong input");
        }
        return result;
    }
}

console.log(calculate());