var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let login = document.querySelector('#login');
let pass = document.querySelector('#password');
let submitBtn = document.querySelector('#submit-btn');

submitBtn.onclick = function(e) {
  e.preventDefault();
  input1 = login.value;
  input2 = pass.value;
  console.log(input1, input2);
  return;
}