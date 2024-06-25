const productItemFactory = (type, itemName, description, graphic) =>{
    return{
type,
itemName,
description,
graphic
    }
}

function addMenuItem(menuItem){
    //Creates the li element
    const articleItem = document.createElement('article');
    articleItem.classList.add('product');

    //Sets the content of the li element
    articleItem.innerHTML = `
        <img src="${menuItem.graphic}">
              <div class="product-text">
                <h3>${menuItem.itemName}</h2>
                <p>${menuItem.description}</p>
              </div>
    `;

    if (menuItem.type === 'food'){
        document.querySelector('#product-food .product-section').appendChild(articleItem);
    } else if (menuItem.type === 'drink'){
        document.querySelector('#product-drink .product-section').appendChild(articleItem);
    } else if (menuItem.type === 'apparel'){
        document.querySelector('#product-apparel .product-section').appendChild(articleItem);
    }
}

//Food products
addMenuItem(productItemFactory('food', 'Cake', 'A nice slice of cake.', '../images/logonotext.png'));

//Drink products
addMenuItem(productItemFactory('drink', 'Coffee Beans', 'Our famous blend.', '../images/logonotext.png'));

//Apparel products
addMenuItem(productItemFactory('apparel', 'T-Shirt', 'The Local Business Cafe branded T-Shirt.', '../images/logonotext.png'));