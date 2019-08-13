
export function cartQuantity(cart) {
    return Object.values(cart).reduce((total, currVal) => total + currVal, 0);
}

// Pass in array of prices
export function totalPrice(prices) {
    return prices.reduce((total, currVal) => total + currVal, 0);
}

export function calculateTotalWithTax(price) {
    price = price * 1.0875
    return Math.round(price * Math.pow(10, 2)) / Math.pow(10, 2).toFixed(2)
}

export function applyDiscount(price, discount, discountType) {
    if (discountType === "percent") {
        discount = discount * 1 / 100;
        return (price * discount).toFixed(2);
    }
    if (discountType === "flat") {
        return price - discount;
    }
}