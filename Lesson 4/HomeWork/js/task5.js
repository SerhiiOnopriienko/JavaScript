// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
// 		let comp = getComputerChoice();
// 		let user = getUserChoice();
// 		function game(comp, user) {
			
// 		}

//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
// -->

do {
    var userChoice = prompt("Enter your choice paper, rock or scissors");
var computerChoice = Math.random();
    if (computerChoice < 0.34){
        computerChoice = "rock";
    } else if (computerChoice < 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
	alert(computerChoice);
		
		let comp = computerChoice;
		let user = userChoice;
		function game(comp, user) {
            if (comp === "rock" && user === "paper"){
                alert("User win`s");
            } else if (comp === "rock" && user === "scissors"){
                alert("Computer win's");
            } else if (comp = "rock" && user === "rock"){
                alert("It's a tie");
            } else if (comp === "paper" && user === "scissors"){
                alert("User win`s");
            } else if (comp === "paper" && user === "rock"){
                alert("Computer win's");
            } else if (comp === "paper" && user === "paper"){
                alert("It`s a tie");
            } else if (comp === "scissors" && user === "paper"){
                alert("Computer win's");
            } else if (comp === "scissors" && user === "rock"){
                alert("User win`s");
            } else if (comp === "scissors" && user === "scissors"){
                alert("It`s a tie");
            }
        }
    game(comp, user);

    var playAgain = confirm("Want play again?"); 
} while (playAgain === true);