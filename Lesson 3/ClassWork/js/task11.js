// 11. Подмассив наибольшей суммы
// 		Определите максимальную сумму в подмассиве
		
// 		// Setup
// 		var a = [
// 			[1, -10, 4, 5],
// 			[1, 5, 5, 3],
// 			[-1, 8, 4, 1],
// 			[1, -10, -4, 5],
// 			[1, 10, 4, 0],
// 		];

// 		Например:
// 		var a = [
// 			[1, 3, 6], 
// 			[3, 1, -1], 
// 			[3, 0]
// 		];
		
// 		Максимальная сумма тут первого подмассива: 1 + 3 + 6 = 10;
// 		Ответ: 10

var a = [
	[1, -10, 4, 5],
	[1, 5, 5, 3],
	[-1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
];

var result1 = a[0].reduce(function(sum, elem){
    return sum + elem;
}, 0);

var result2 = a[1].reduce(function(sum, elem){
    return sum + elem;
}, 0);

var result3 = a[2].reduce(function(sum, elem){
    return sum + elem;
}, 0);

var result4 = a[3].reduce(function(sum, elem){
    return sum + elem;
}, 0);

var result5 = a[4].reduce(function(sum, elem){
    return sum + elem;
}, 0);

if (result1 > result2 && result1 > result3 && result1 > result4 && result1 > result5){
    console.log(result1);
} else if (result2 > result1 && result2 > result3 && result2 > result4 && result2 > result5){
    console.log(result2);
} else if (result3 > result1 && result3 > result2 && result3 > result4 && result3 > result5){
    console.log(result3);
} else if (result4 > result1 && result4 > result2 && result4 > result3 && result4 > result5){
    console.log(result4);
} else if (result5 > result1 && result5 > result2 && result5 > result3 && result5 > result4){
    console.log(result5);
} else {
    console.log("Error");
}

// чи не занадто це довгий спосіб?