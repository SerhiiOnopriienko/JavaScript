// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var num3 = +prompt("Enter third number");
var result;


if (num1 > num2 && num1 > num3){
    result = num1;
    console.log("The bigest number is first and it is " + result);
} else if (num2 > num1 && num2 > num3){
    result = num2;
    console.log("The bigest number is second and it is " + result);
} else if (num3 > num1 && num3 > num2){
    result = num3;
    console.log("The bigest number is third and it is " + result);
} else {
    console.log("Error");
}
// switch (num1, num2, num3) {
//     case num1 > num2:
//     case num1 > num3:
//         result = num1;
//         console.log("The bigest number is first and it is " + result);
//         break;
//     case num2 > num1:
//     case num2 > num3:
//         result = num2;
//         console.log("The bigest number is second and it is " + result);
//         break;
//     case num3 > num1:
//     case num3 > num2:
//         result = num3;
//         console.log("The bigest number is third and it is " + result);
//         break;
//     default:
//         console.log("Error");
// }