"use strict";
const product = {
    name: "Laptop",
    price: 20000,
    quantity: 5
};
const product1 = {
    name: "mobile",
    price: 5000,
    quantity: 10,
    SN_number: true
};
function calculateTotalPrice(pro) {
    return `Total Price: ${pro.price * pro.quantity}`;
}
const totalprice = calculateTotalPrice(product);
const totalprice1 = calculateTotalPrice(product1);
console.log(totalprice);
console.log(totalprice1);
// Function to calculate total price
function calculateTotalprice(priceDetails) {
    return priceDetails.price * priceDetails.quantity;
}
// Example implementation
const product3 = {
    productName: "Laptop",
    productId: 12345,
    coupon: (couponCode) => {
        // Mock logic to apply coupon and return discounted price
        if (couponCode === "DISCOUNT20") {
            return 20;
        }
        else {
            return 0; // No discount applied
        }
    },
    getProductDetails: () => {
        return `Product: ${product3.productName}, ID: ${product3.productId}`;
    },
    price: 1000,
    quantity: 2
};
// Calculate and display total price
const totalPrice = calculateTotalprice(product3);
console.log(`Total Price: ${totalPrice}`);
