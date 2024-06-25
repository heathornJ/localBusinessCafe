//Template for creating items for the menu
const menuItemFactory = (type, itemName, description, price) =>{
    return{
type,
itemName,
description,
price
    }
}

//function for adding the menu item to the menu
function addMenuItem(menuItem){
    //Creates the li element
    const listItem = document.createElement('li');

    //Sets the content of the li element
    listItem.innerHTML = `
        <div class="item">
            <div class="item-text">
                <h3 class="item-name">${menuItem.itemName}</h3>
                <p class="item-description">${menuItem.description}</p>
            </div>
            <p class="price"><strong>£${menuItem.price}</strong></p>
        </div>
    `;

    //Appends item to the correct portion of the menu
    if (menuItem.type === 'hot'){
        document.querySelector('#hot-drinks-list ul').appendChild(listItem);
    } else if (menuItem.type === 'cold'){
        document.querySelector('#cold-drinks-list ul').appendChild(listItem);
    } else if (menuItem.type === 'meal'){
        document.querySelector('#meals-list ul').appendChild(listItem);
    } else if (menuItem.type === 'snack'){
        document.querySelector('#snacks-list ul').appendChild(listItem);
    }
}

//Hot Drinks
addMenuItem(menuItemFactory('hot', 'Americano', 'It\'s that good bean juice.', '3.00'));
addMenuItem(menuItemFactory('hot', 'Americano', 'It\'s that good bean juice.', '3.00'));
addMenuItem(menuItemFactory('hot', 'Americano', 'It\'s that good bean juice.', '3.00'));
addMenuItem(menuItemFactory('hot', 'Americano', 'It\'s that good bean juice.', '3.00'));

//Cold Drinks
addMenuItem(menuItemFactory('cold', 'Iced Coffee', 'It\'s that cold bean juice.', '3.00'));
addMenuItem(menuItemFactory('cold', 'Iced Coffee', 'It\'s that cold bean juice.', '3.00'));
addMenuItem(menuItemFactory('cold', 'Iced Coffee', 'It\'s that cold bean juice.', '3.00'));
addMenuItem(menuItemFactory('cold', 'Iced Coffee', 'It\'s that cold bean juice.', '3.00'));

//Meals
addMenuItem(menuItemFactory('meal', 'Cheese Sandwich', 'It\'s that good cheese slice.', '3.00'));
addMenuItem(menuItemFactory('meal', 'Cheese Sandwich', 'It\'s that good cheese slice.', '3.00'));
addMenuItem(menuItemFactory('meal', 'Cheese Sandwich', 'It\'s that good cheese slice.', '3.00'));
addMenuItem(menuItemFactory('meal', 'Cheese Sandwich', 'It\'s that good cheese slice.', '3.00'));

//Snacks
addMenuItem(menuItemFactory('snack', 'Cracker', 'It\'s a single, dry, cracker', '3.00'));
