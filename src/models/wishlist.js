const prisma = require("../helpers/prisma")

exports.createWishlist = async (data) => {
    const wishlist = await prisma.wishlist.create({
        data
    });
    return wishlist;
}