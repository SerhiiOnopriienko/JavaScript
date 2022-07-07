// 1. Сделать собственные примеры методов применяемых для массивов.

let arr = [1, 2, 3, 4, 5, 6];
console.log("Just an array: " + arr);

let shortArr = arr.slice(3, 5);
console.log("slice method: " + shortArr);

arr.splice(5, 1, "number", "item", "anything");
console.log("Splice method: " + arr);