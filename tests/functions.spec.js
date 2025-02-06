describe("Grocery Shopping Assistant", function() {
    let shoppingList;

    beforeEach(function() {
        shoppingList = [];
    });

    // Iteration #1: Add an Item
    it("should add an item to the shopping list", function() {
        const newItem = { name: 'Apples', quantity: 3, price: 1.50 };
        addItem(shoppingList, newItem);
        expect(shoppingList.length).toBe(1);
        expect(shoppingList[0]).toEqual(newItem);
    });

    // Iteration #2: Remove an Item
    it("should remove an item from the shopping list", function() {
        const newItem = { name: 'Apples', quantity: 3, price: 1.50 };
        addItem(shoppingList, newItem);
        removeItem(shoppingList, 'Apples');
        expect(shoppingList.length).toBe(0);
    });

    it("should not change the list if the item to remove doesn't exist", function() {
        const newItem = { name: 'Apples', quantity: 3, price: 1.50 };
        addItem(shoppingList, newItem);
        removeItem(shoppingList, 'Oranges');
        expect(shoppingList.length).toBe(1);
    });

    // Iteration #3: Calculate Total Cost
    it("should calculate the total cost of all items", function() {
        addItem(shoppingList, { name: 'Apples', quantity: 3, price: 1.50 });
        addItem(shoppingList, { name: 'Bananas', quantity: 2, price: 1.00 });
        const totalCost = calculateTotalCost(shoppingList);
        expect(totalCost).toBe(6.50); // (3 * 1.50) + (2 * 1.00)
    });

    // Iteration #4: Find Item by Name
    it("should find an item by name", function() {
        const newItem = { name: 'Apples', quantity: 3, price: 1.50 };
        addItem(shoppingList, newItem);
        const foundItem = findItem(shoppingList, 'Apples');
        expect(foundItem).toEqual(newItem);
    });

    it("should return null if the item does not exist", function() {
        const foundItem = findItem(shoppingList, 'Oranges');
        expect(foundItem).toBeNull();
    });

    // Iteration #5: List All Items
    it("should list all items in the shopping list", function() {
        const consoleSpy = spyOn(console, 'log'); // Use Jasmine's spyOn
    
        addItem(shoppingList, { name: 'Apples', quantity: 3, price: 1.50 });
        addItem(shoppingList, { name: 'Bananas', quantity: 2, price: 1.00 });
        
        listItems(shoppingList);
        
        expect(consoleSpy).toHaveBeenCalledWith('Apples: Quantity - 3, Total Price - $4.50');
        expect(consoleSpy).toHaveBeenCalledWith('Bananas: Quantity - 2, Total Price - $2.00');
    });
    

    // Bonus #1: Calculate Total Quantity
    it("should calculate the total quantity of all items", function() {
        addItem(shoppingList, { name: 'Apples', quantity: 3, price: 1.50 });
        addItem(shoppingList, { name: 'Bananas', quantity: 2, price: 1.00 });
        const totalQuantity = calculateTotalQuantity(shoppingList);
        expect(totalQuantity).toBe(5);
    });

    // Bonus #2: Unique Item Count
    it("should count the number of unique items", function() {
        addItem(shoppingList, { name: 'Apples', quantity: 3, price: 1.50 });
        addItem(shoppingList, { name: 'Bananas', quantity: 2, price: 1.00 });
        addItem(shoppingList, { name: 'Apples', quantity: 1, price: 1.00 });
        const uniqueCount = getUniqueItemCount(shoppingList);
        expect(uniqueCount).toBe(2); // Apples and Bananas are unique
    });

    // Bonus #3: Most Expensive Item
    it("should find the most expensive item", function() {
        addItem(shoppingList, { name: 'Apples', quantity: 3, price: 1.50 });
        addItem(shoppingList, { name: 'Bananas', quantity: 2, price: 1.00 });
        addItem(shoppingList, { name: 'Cherries', quantity: 1, price: 3.00 });
    
        const expensiveItem = findMostExpensiveItem(shoppingList);
        expect(expensiveItem).toEqual({ name: 'Apples', quantity: 3, price: 1.50 });
    });
});