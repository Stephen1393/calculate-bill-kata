function calculateBill(price,vat,tip) {

    const total = price + (price * vat/100) + tip
    return total.toString();
}

module.exports = calculateBill;