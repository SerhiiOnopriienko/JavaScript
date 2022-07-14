// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность
    
let a = +prompt("Enter a number");
let b = +prompt("Enter the power of yhe number");

function power(a, b){
    if (a < 0 || b < 0 || isNaN(a) || isNaN(b)){
        alert("Enter a positive number")
    } else {
    console.log(a ** b);
    }
    return;
}
power(a, b);