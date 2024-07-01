//Template for creating items for the menu
const menuItemFactory = (type, itemName, description, price) => {
  return {
    type,
    itemName,
    description,
    price,
  };
};

//function for adding the menu item to the menu
function addMenuItem(menuItem) {
  //Creates the li element
  const listItem = document.createElement("li");

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
  if (menuItem.type === "hot") {
    document.querySelector("#hot-drinks-list ul").appendChild(listItem);
  } else if (menuItem.type === "cold") {
    document.querySelector("#cold-drinks-list ul").appendChild(listItem);
  } else if (menuItem.type === "meal") {
    document.querySelector("#meals-list ul").appendChild(listItem);
  } else if (menuItem.type === "snack") {
    document.querySelector("#snacks-list ul").appendChild(listItem);
  }
}

//Shorthand for faster product creation
const h = "hot";
const c = "cold";
const m = "meal";
const s = "snack";

//Hot Drinks
const hotDrinks = [
  menuItemFactory(h, "Espresso", "A bold and rich shot of concentrated coffee. Perfect for a quick caffeine boost", "2.00"),
  menuItemFactory(h, "Cappuccino", "A balanced blend of espresso, steamed milk, and a thick layer of frothy milk foam.", "2.80"),
  menuItemFactory(h, "Latte", "Smooth and creamy, this classic drink combines rich espresso with steamed milk and a light layer of foam.", "3.00"),
  menuItemFactory(h, "Americano", "It's that good bean juice.", "3.00"),
  menuItemFactory(h, "Mocha", "Indulge in the perfect harmony of espresso, steamed milk, and rich chocolate syrup, topped with a dollop of whipped cream for a decadent treat.", "3.20"),
  menuItemFactory(h, "Flat White", "It's that good bean juice.", "2.80"),
];

//Cold Drinks
const coldDrinks = [
  menuItemFactory(c, "Iced Coffee", "Freshly brewed coffee, cooled and served over ice. Simple, refreshing, and perfect for hot days.", "2.50"),
  menuItemFactory(c, "Iced Latte", "A cool and refreshing combination of espresso and chilled milk, served over ice. Add your favorite syrup for a personalized flavor experience.", "3.20"),
  menuItemFactory(c, "Cold Brew", "Smooth, rich, and less acidic than traditional iced coffee, this brew is made by steeping coarsely ground coffee beans in cold water for an extended period.", "3.50"),
  menuItemFactory(c, "Iced Americano", "A refreshing take on the classic Americano, made by diluting a shot of espresso with cold water and serving it over ice.", "2.80"),
  menuItemFactory(c, "Iced Mocha", "A refreshing take on the classic Americano, made by diluting a shot of espresso with cold water and serving it over ice.", "3.50"),
  menuItemFactory(c, "Affogato", "A refreshing take on the classic Americano, made by diluting a shot of espresso with cold water and serving it over ice.", "4.00"),
];

//Meals
const meals = [
  menuItemFactory(m, "Avocado Toast", "Freshly mashed avocado spread on toasted bread, topped with a sprinkle of sea salt, cracked black pepper, and a drizzle of olive oil. Served on your choice of a bagel, croissant, or whole-grain bread.", "5.00"),
  menuItemFactory(m, "Breakfast Sandwich", "A warm, toasted sandwich filled with scrambled eggs, crispy bacon, and melted cheddar cheese. Served on your choice of a bagel, croissant, or whole-grain bread.", "6.00"),
  menuItemFactory(m, "Tomato and Mozzarella Panini", "A toasted panini filled with fresh mozzarella, ripe tomatoes, and basil pesto, pressed to perfection. Served with a side salad or crisps.", "6.50"),
  menuItemFactory(m, "Chicken Club Sandwich", "A triple-decker sandwich with grilled chicken breast, crispy bacon, lettuce, tomato, and mayo, served on toasted whole grain bread. Comes with a side of crisps.", "6.50"),
  menuItemFactory(m, "Grilled Cheese Sandwich", "A classic comfort food, this sandwich features melted cheddar and mozzarella cheeses between two slices of buttery, toasted bread. Perfectly crispy on the outside and gooey on the inside.", "4.50"),
  menuItemFactory(m, "Bagel with Cream Cheese and Smoked Salmon", "A toasted bagel topped with smooth cream cheese and thin slices of smoked salmon. Garnished with capers, red onions, and a lemon wedge.", "6.00"),
];

//Snacks
const snacks = [
  menuItemFactory(s, "Croissant", "It's a single, dry, cracker", "3.00"),
  menuItemFactory(s, "Muffin", "Delicious, moist muffins in a variety of flavors such as blueberry, chocolate chip, and lemon poppy seed. Perfect for a sweet treat with your coffee.", "2.50"),
  menuItemFactory(s, "Brownie", "Rich, fudgy brownies with a dense, chocolatey texture. Some variations may include nuts, caramel, or a swirl of cream cheese", "2.50"),
  menuItemFactory(s, "Cinnamon Roll", "Soft and fluffy rolls swirled with cinnamon sugar, topped with a rich cream cheese icing. A comforting treat that pairs perfectly with coffee.", "3.00"),
  menuItemFactory(s, "Banana Bread", "Moist and flavorful banana bread, sometimes with added walnuts or chocolate chips.", "2.00"),
];

hotDrinks.forEach(addMenuItem);
coldDrinks.forEach(addMenuItem);
meals.forEach(addMenuItem);
snacks.forEach(addMenuItem);
