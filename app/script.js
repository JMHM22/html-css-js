let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item adicionado ao carrinho");
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <li>
                ${item.name} - R$ ${item.price.toFixed(2)}
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    totalEl.innerText = "Total: R$ " + total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout() {
    window.location.href = "checkout.html";
}

renderCart();
// Add your Javascript code here
