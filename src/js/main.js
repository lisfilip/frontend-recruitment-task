const modal = document.getElementById("myModal");
const btn = document.getElementById("button");
const closeButton = document.getElementsByClassName("close")[0];
const counterDiv = document.getElementById("counter");
const reset = document.getElementById("reset-button");

btn.onclick = () => {
	let currentValue = Number(localStorage.getItem("value"));
	modal.style.display = "block";
	reset.style.display = "none";
	if (currentValue >= 4) {
		reset.style.display = "block";
	}
	localStorage.setItem("value", currentValue + 1);
	counterDiv.innerHTML = localStorage.getItem("value");
};

reset.onclick = () => {
	counterDiv.innerHTML = 0;
	localStorage.setItem("value", "0");
	reset.style.display = "none";
};

closeButton.onclick = () => {
	modal.style.display = "none";
};

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
