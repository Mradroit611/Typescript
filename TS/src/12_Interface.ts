// Interface -----------------------------------------
interface Products{
    name: string;
    price: number;
    quantity: number
    SN_number?: boolean; // ? - use for optional

}

const product:Products={
    name: "Laptop",
    price: 20000,
    quantity: 5
}
const product1:Products={
    name: "mobile",
    price: 5000,
    quantity: 10,
    SN_number: true
}

function calculateTotalPrice(pro:Products){
    return `Total Price: ${pro.price*pro.quantity}`
}

const totalprice = calculateTotalPrice(product);
const totalprice1 = calculateTotalPrice(product1);
console.log(totalprice);
console.log(totalprice1);








// Complex one ---------------------------------------------------------------
// Interface for ProductDetails
// Interface for ProductDetails
interface ProductDetails {
    productName: string;
    productId: number;
    coupon: (couponCode: string) => number;
    getProductDetails: () => string;
}

// Interface for PriceDetails extended with ProductDetails properties
interface PriceDetails extends ProductDetails {
    price: number;
    quantity: number;
}

// Function to calculate total price
function calculateTotalprice(priceDetails: PriceDetails): number {
    return priceDetails.price * priceDetails.quantity;
}

// Example implementation
const product3: PriceDetails = {
    productName: "Laptop",
    productId: 12345,
    coupon: (couponCode: string) => {
        // Mock logic to apply coupon and return discounted price
        if (couponCode === "DISCOUNT20") {
            return 20;
        } else {
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

