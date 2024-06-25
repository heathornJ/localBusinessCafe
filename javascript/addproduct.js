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
        <img src= {graphic}>
              <div class="product-text">
                <h3>itemName}</h2>
                <p>{description}</p>
              </div>
    `;
}