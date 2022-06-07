const modal = document.getElementById("myModal");
const closeButton = document.getElementById("close");
const counterDiv = document.getElementById("counter");
const reset = document.getElementById("reset-button");

const COUNTER_KEY = "counter_key";

const openModal = () => {
	modal.style.display = "flex";
};
const hideModal = () => {
	modal.style.display = "none";
};
const showResetButton = () => {
	reset.style.display = "block";
};
const hideResetButton = () => {
	reset.style.display = "none";
};

const onOpenModalButtonClick = () => {
	const currentValue = Number(localStorage.getItem(COUNTER_KEY));
	const newValue = currentValue + 1;
	openModal();
	newValue >= 5 ? showResetButton() : hideResetButton();
	localStorage.setItem(COUNTER_KEY, newValue);
	counterDiv.innerHTML = newValue;
};
class OpenModalButton extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    <button onClick="onOpenModalButtonClick()" class="button-component">Button</button>
		`;
	}
}

reset.onclick = () => {
	counterDiv.innerHTML = 0;
	localStorage.setItem(COUNTER_KEY, "0");
	hideResetButton();
};

closeButton.onclick = () => {
	hideModal();
};

window.onclick = (event) => {
	if (event.target == modal) {
		hideModal();
	}
};

customElements.define("button-component", OpenModalButton);
