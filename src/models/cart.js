const prisma = require("../helpers/prisma");
exports.createCart = async (data) => {
    const cart = await prisma.cart.create({
        data,
        include: {
            products: true,
            coupons: true, 
            orders: true
        }
    })
    return cart;
}