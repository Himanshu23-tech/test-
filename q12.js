class InvalidCouponCode extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCouponCode"
    }
}

function applyCoupon(code) {
    const validCoupon = "SAVE10"

    if (code !== validCoupon) {
        throw new InvalidCouponCode("Invalid coupon code")
    }

    console.log("Coupon applied successfully")
}

try {
    applyCoupon("SAVE20")
}
catch (error) {
    if (error instanceof InvalidCouponCode) {
        console.log(error.name + ": " + error.message);
    }
}