var num = prompt('Enter a number!');
var result;

switch (num) {
    case "5":
        result = "Tiny";
        break;
    case "10":
        result = "Small";
        break;
    case "15":
        result = "Medium";
        break;
    case "20":
        result = "Large";
        break;
    case "25":
        result = "Huge";
        break;
    default:
        result = "Entered invalid number";
}
console.log(result);