function X(productData) {
	createProductVisited(productData.data.reference);
	createProductRecommended(productData.data.recommendation);
}

function createProductVisited(product) {
	let productVisited = document.getElementById('productVisited');

	let div = document.createElement('div');
	div.className = 'product';

	let image = document.createElement('img');
	image.src = product.item.imageName;
	image.alt = product.item.name;

	let name = document.createElement('h2');
	name.className = 'nameProduct';
	name.innerText = product.item.name;

	let oldPrice;
	if (product.item.oldPrice != null) {
		oldPrice = document.createElement('p');
		oldPrice.className = 'oldPrice price';
		oldPrice.innerText = `De: ${product.item.oldPrice}`;
	}

	let price = document.createElement('p');
	price.className = 'currentPrice price';
	price.innerHTML = `Por: <strong>${product.item.price}</strong>`;

	let infoPayment = document.createElement('p');
	infoPayment.className = 'infoPayment price';
	infoPayment.innerHTML = product.item.productInfo.paymentConditions;

	div.appendChild(image);
	div.appendChild(name);
	if (oldPrice) {
		div.appendChild(oldPrice);
	}
	div.appendChild(price);
	div.appendChild(infoPayment);

	productVisited.appendChild(div);
}

function createProductRecommended(product) {
	let productList = document.getElementById('productList');
	for (let index = 0; index < product.length; index++) {
		let li = document.createElement('li');
		li.className = 'products';

		let div = document.createElement('div');
		div.className = 'product recommended-product';

		let link = document.createElement('a');
		link.className = 'productLink';
		link.title = product[index].name;
		link.href = product[index].detailUrl;

		let image = document.createElement('img');
		image.src = product[index].imageName;
		image.alt = product[index].name;

		let name = document.createElement('h2');
		name.className = 'nameProduct';
		name.innerText = product[index].name;

		let oldPrice;
		if (product[index].oldPrice != null) {
			oldPrice = document.createElement('p');
			oldPrice.className = 'oldPrice price';
			oldPrice.innerText = `De: ${product[index].oldPrice}`;
		}

		let price = document.createElement('p');
		price.className = 'currentPrice price';
		price.innerHTML = `Por: <strong>${product[index].price}</strong>`;

		let infoPayment = document.createElement('p');
		infoPayment.className = 'infoPayment price';
		infoPayment.innerHTML = product[index].productInfo.paymentConditions;

		link.appendChild(image);
		link.appendChild(name);
		if (oldPrice) {
			link.appendChild(oldPrice);
		}
		link.appendChild(price);
		link.appendChild(infoPayment);

		div.appendChild(link);
		li.appendChild(div);
		productList.appendChild(li);
	}
}
