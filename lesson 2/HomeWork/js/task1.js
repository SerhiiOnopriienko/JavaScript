let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
if (num1 == num2){
    console.log("Error");
}
else if (num1 == num3){
    console.log("Error");
}
else if (num2 == num3){
    console.log("Error");
} else {
    console.log(num1 + num2 + num3 / 3);
}