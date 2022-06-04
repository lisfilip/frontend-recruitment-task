const modal = document.getElementById("myModal");
const btn = document.getElementById("button");
const span = document.getElementsByClassName("close")[0];
const counterDiv = document.getElementById("counter");
const reset = document.getElementById("reset");
const resetButton = document.getElementById("resetButton")


btn.onclick = function() {
  let currentValue = Number(localStorage.getItem('value'));
  modal.style.display = "block";
  resetButton.style.display="none"
  if (currentValue >= 4) {
    resetButton.style.display="block"
  }
    let value;
      localStorage.setItem('value', currentValue + 1);
    counterDiv.innerHTML = localStorage.getItem('value');
}

resetButton.onclick = function() {
  counterDiv.innerHTML = 0;
  localStorage.setItem('value', "0");
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}