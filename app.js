const products = [
  {
    id: 1,
    title: "Lenovo Yoga",
    price: 3000,
  },
  {
    id: 2,
    title: "Acer Aspire",
    price: 1800,
  },
  {
    id: 3,
    title: "Dell Vostro",
    price: 3400,
  },
];

let order = [];

function addToBasket(productId) {
  let check = order.find((i) => i.id === productId);

  if (check) {
    alert("Товар уже в корзине");
  } else {
    let stuff = products.find((i) => i.id === productId);
    order.push(stuff);
  }

  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  order = order.filter((i) => i.id !== productId);

  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {
  let totalPrice = order.reduce((acc, num) => {
    return acc + num.price;
  }, 0);

  document.getElementById("total").innerText = totalPrice;
}

function renderCart() {
  const cart = document.getElementById("basket-items");

  cart.innerHTML = "";
  order.forEach((item) => {
    const el = document.createElement("li");
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.appendChild(el);
  });
}
