const modal = document.getElementById("myModal");
const closeButton = document.getElementById("close");
const counterDiv = document.getElementById("counter");
const reset = document.getElementById("reset-button");

const buttonModal = () => {
  let currentValue = Number(localStorage.getItem("value"));
	modal.style.display = "block";
	reset.style.display = "none";
	if (currentValue >= 4) {
		reset.style.display = "block";
	}
	localStorage.setItem("value", currentValue + 1);
	counterDiv.innerHTML = localStorage.getItem("value");
}

class Button extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <button onClick="buttonModal()" class="button-component">Button</button>`;
	}
}

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

customElements.define("button-component", Button);