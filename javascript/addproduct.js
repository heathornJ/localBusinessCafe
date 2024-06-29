const product = (type, itemName, description, graphic) => {
  return {
    type,
    itemName,
    description,
    graphic,
  };
};

function addItem(product) {
  //Creates the li element
  const articleItem = document.createElement("article");
  articleItem.classList.add("product");

  //Sets the content of the li element
  articleItem.innerHTML = `
        <img src="${product.graphic}">
              <div class="product-text">
                <h3>${product.itemName}</h2>
                <p>${product.description}</p>
              </div>
    `;

  if (product.type === "coffee") {
    document
      .querySelector("#product-coffee .product-section")
      .appendChild(articleItem);
  } else if (product.type === "merchandise") {
    document
      .querySelector("#product-merchandise .product-section")
      .appendChild(articleItem);
  } else if (product.type === "gift") {
    document
      .querySelector("#product-gift .product-section")
      .appendChild(articleItem);
  }
}

//Shorthand for faster product creation
const c = "coffee";
const m = "merchandise";
const g = "gift";

const coffeeProducts = [
  product(
    c,
    "Coffee Beans - 500g",
    "Our famous blend, available for you to take home.",
    "../images/logonotext.png"
  ),
  product(c,
  "Coffee Beans - 1kg",
  "Our famous blend, available for you to take home.",
  "../images/logonotext.png"),
  product(c,
  "Coffee Beans - 2kg",
  "Our famous blend, available for you to take home.",
  "../images/logonotext.png")
];

const merchandiseProducts = [
  product(
    m,
    "T-Shirt",
    "The Local Business Cafe branded T-Shirt.",
    "../images/logonotext.png"
  ),
  product(m,
  "Hoodie",
  "The Local Business Cafe branded hoodie.",
  "../images/logonotext.png"),
  product(m,
  "Cap",
  "The Local Business Cafe branded cap.",
  "../images/logonotext.png")
];

const giftProducts = [
  product(
    g,
    "Gift Card",
    "Nothing says 'Thank you', 'I love you', or 'Good job!' like free coffee. Give the gift of coffee with our gift card.",
    "../images/logonotext.png"
  ),
  product(g,
  "Gift Set",
  "Give the gift of coffee with a mug, 500g of coffee.",
  "../images/logonotext.png"),
];

coffeeProducts.forEach(addItem);
merchandiseProducts.forEach(addItem);
giftProducts.forEach(addItem);
