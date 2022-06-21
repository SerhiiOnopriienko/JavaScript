// 7. Напишите код, который будет спрашивать логин с помощью prompt.

// 			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// 			Пароль проверять так:
// 			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 			Иначе – «Неверный пароль»,
// 			При отмене – «Отменено».
			
// 			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.


let login = prompt("Enter login");
if (login === "Admin"){
    let pass = prompt("Enter password")
    if (pass === "Я главный"){
        console.log("Hello!");
    } else if(pass === null){
        console.log("Canceled")
    } else {
        console.log("Incorrect password")
    }
} else if (login === "" || login === null){
    console.log("Canceled");
} else {
    console.log("I don`t know you")
}