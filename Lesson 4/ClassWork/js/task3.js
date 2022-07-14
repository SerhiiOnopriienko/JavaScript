// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"

// let a = "something";
function reverse(a){
    arr = a.split("");
    console.log(arr);
    arr.reverse();
    a = arr.join('');
    console.log(a);
    return;
}

reverse("something");