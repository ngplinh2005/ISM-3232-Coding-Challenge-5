// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 },
    { name: 'Cold Brew', price: 3.5, quantity: 7 }
]

// Task 2: Create an Orders Array of Order Objects
const orders = []

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, itemsOrdered) {
    for (let i = 0; i < itemsOrdered.length; i++) {
        const itemOrdered = itemsOrdered[i]
        const productInInventory = inventory.find(product => product.name === itemOrdered.name)

        if (!productInInventory || productInInventory.quantity < itemOrdered.quantity) {
            console.log(`There is not enough ${itemOrdered.name} in stock.`)
            return
        }
    }

    for (let i = 0; i < itemsOrdered.length; i++) {
        const itemOrdered = itemsOrdered[i]
        const productInInventory = inventory.find(product => product.name === itemOrdered.name)
        productInInventory.quantity -= itemOrdered.quantity
    }

    const newOrder = {
        customerName: customerName,
        items: itemsOrdered,
        status: 'Pending'
    }
    orders.push(newOrder)
}

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    return order.items.reduce(function(total, itemOrdered) {
        const productInInventory = inventory.find(product => product.name === itemOrdered.name)
        return total + (productInInventory.price * itemOrdered.quantity)
    }, 0)
}

// Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) {
    const orderCompleted = orders.find(order => order.customerName === customerName)
    if (orderCompleted) {
        orderCompleted.status = 'Completed'
    }
    else {
        console.log(`The order for ${customerName} is not found.`)
    }
}

// Task 6: Create a Function to Check Pending Orders

function checkPendingOrders() {
    orders.forEach(order => {
        if (order.status === 'Pending') {
            console.log(`Pending order for ${order.customerName}:`, order.items)
        }
    })
}


