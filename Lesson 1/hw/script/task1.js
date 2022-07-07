let x1 = prompt("Enter x 1 number");
let x2 = prompt("Enter x 2 number");
let y1 = prompt("Enter y 1 number");
let y2 = prompt("Enter y 2 number");
let k = (y1 - y2) / (x1 - x2);
let b = y2 - k*x2;
console.log("y=" + k + " x +" + b);