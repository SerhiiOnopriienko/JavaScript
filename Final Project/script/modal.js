// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let login = document.querySelector('#login');
let pass = document.querySelector('#password');
let submitBtn = document.querySelector('#submit-btn');

var modalClick = submitBtn.onclick = function() {
    input1 = login.value;
    input2 = pass.value;
    console.log(input1, input2);
    return;
}

console.log(modalClick);