// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// 		Функция должна вернуть "Even" или "Odd";

		function isEven(num) {
			num % 2 === 0 ? console.log("Even") : console.log("Odd");
		}
        isEven(3);