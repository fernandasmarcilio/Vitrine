let positionSlide;
let quantityProductToShow;
let listProduct;

let initialPosition;
let finalPosition;

function load() {
	listProduct = document.querySelectorAll('.products');
	positionSlide = 0;
	quantityProductToShow = 4;

	initialPosition = 0;
	finalPosition = quantityProductToShow - 1;

	resetShowCase();
	startShowCase();
}

function resetShowCase() {
	listProduct.forEach((product) => {
		product.style.display = 'none';
	});
}

function startShowCase() {
	renderList(initialPosition, finalPosition);
	disableButton('left');
}

function slideRight() {
	resetShowCase();
	enableButton('left');

	initialPosition = finalPosition + 1;
	finalPosition += quantityProductToShow;

	if (finalPosition >= listProduct.length - 1) {
		finalPosition = listProduct.length - 1;
		initialPosition = finalPosition - (quantityProductToShow - 1);
		disableButton('right');
	}

	renderList(initialPosition, finalPosition);

	positionSlide = finalPosition;
}

function slideLeft() {
	resetShowCase();
	enableButton('right');
	finalPosition = initialPosition - 1;
	initialPosition -= quantityProductToShow;

	if (initialPosition <= 0) {
		initialPosition = 0;
		finalPosition = initialPosition + (quantityProductToShow - 1);
		disableButton('left');
	}

	renderList(initialPosition, finalPosition);

	positionSlide = initialPosition;
}

function renderList(initialPosition, finalPosition) {
	for (let position = initialPosition; position <= finalPosition; position++) {
		listProduct[position].style.display = 'block';
	}
}

function disableButton(side) {
	let button = document.querySelector(`#button-${side}`);
	button.style.color = '#a7d1df';
	button.disabled = 'true';
}

function enableButton(side) {
	let button = document.querySelector(`#button-${side}`);
	button.style.color = '#11749f';
	button.disabled = '';
}
