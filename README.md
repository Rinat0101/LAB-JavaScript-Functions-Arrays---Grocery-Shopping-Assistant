# LAB-JavaScript-Functions-Arrays---Grocery-Shopping-Assistant

## Learning Goals
- Understand and use JavaScript functions and arrays to manage a grocery shopping list.
- Apply conditional statements for managing shopping-related tasks.
- Utilize loops to analyze and summarize data about the items.

## Introduction
Welcome to the Grocery Shopping Assistant lab! In this lab, you'll help users manage their grocery shopping lists through an interactive application. You'll be learning to manipulate arrays and create functions that support common grocery-related tasks.

## Requirements
You will complete the following iterations, each focusing on specific programming skills.

### Iteration #1: Add an Item to the Shopping List
Implement the function `addItem` that takes two parameters: an array representing the shopping list and an object representing the grocery item (e.g., `{ name: 'Apples', quantity: 3, price: 1.50 }`). The function should add the new item to the shopping list.

**Example:**
```javascript
const shoppingList = [];
const newItem = { name: 'Apples', quantity: 3, price: 1.50 };
addItem(shoppingList, newItem);

Iteration #2: Remove an Item from the Shopping List
Implement the function removeItem that takes the shopping list and the name of the item to remove. The function should find and remove the specified item from the list.

Example:

javascript
Copy
removeItem(shoppingList, 'Apples');
Iteration #3: Calculate Total Cost
Implement the function calculateTotalCost that takes the shopping list array and returns the total cost of all items. This should be calculated based on the quantity and price of each item.

Example:

javascript
Copy
const totalCost = calculateTotalCost(shoppingList); // Returns total cost
Iteration #4: Find Item by Name
Implement the function findItem that takes the shopping list and an item name. It should return the item object if it exists or null if it doesn’t.

Example:

javascript
Copy
const item = findItem(shoppingList, 'Apples');
if (item) {
    console.log('Item found:', item);
} else {
    console.log('Item not found.');
}
Iteration #5: List All Items
Implement the function listItems that takes the shopping list and prints a summary of all items, including their name, quantity, and total price for that item (quantity * price).

Example:

javascript
Copy
listItems(shoppingList); // Prints all items in the shopping list
Bonus #1: Calculate Total Quantity
Implement the function calculateTotalQuantity that takes the shopping list and returns the total quantity of all items being purchased.

Example:

javascript
Copy
const totalQuantity = calculateTotalQuantity(shoppingList); // Returns total quantity
Bonus #2: Unique Item Count
Implement the function getUniqueItemCount that returns the count of unique items in the shopping list.

Example:

javascript
Copy
const uniqueCount = getUniqueItemCount(shoppingList); // Returns number of unique items
Bonus #3: Most Expensive Item
Implement the function findMostExpensiveItem that scans through the shopping list and returns the item with the highest total price (calculated as quantity * price).

Example:

javascript
Copy
const expensiveItem = findMostExpensiveItem(shoppingList); // Returns the most expensive item
Submission
Upon completion, run the following commands in your terminal:

bash
Copy
git add .
git commit -m "Completed Grocery Shopping Assistant Lab"
git push origin master
Create a Pull Request so that your TAs can check your work.

Instructions
Write your code in the src/grocery-shopping.js file, following the instructions provided for each iteration.
Make sure to test your functions thoroughly, ensuring they work as expected.
Conclusion
This lab allows participants to engage in practical coding applications through a grocery shopping context. The structured iterations progress logically, enhancing learning as they implement functions that reflect real-world scenarios. Feel free to customize the iterations further to suit your audience or add additional complexity!

text
Copy

This format gives each iteration a specific title with clear instructions and examples, making it easy for participants to follow along. You can use this directly as your README content. If you need any more modifications, just let me know!
