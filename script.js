let total = 0;

function addProduct(button, price) {
	total += price;
	updateTotal();
	let productCount = button.parentNode.querySelector(".productCount");
	productCount.textContent = parseInt(productCount.textContent) + 1;
}

function removeProduct(button, price) {
	if (total - price >= 0) {
		total -= price;
		updateTotal();
		let productCount = button.parentNode.querySelector(".productCount");
		if (parseInt(productCount.textContent) > 1) {
			productCount.textContent = parseInt(productCount.textContent) - 1;
		}
	}
}

function deleteProduct(button) {
	let product = button.parentNode;
	let price = parseInt(
		product.querySelector("span:nth-child(2)").textContent.slice(1)
	);
	total -= price;
	product.remove();
	updateTotal();
}

function updateTotal() {
	document.querySelector("#total").textContent = total;
}
