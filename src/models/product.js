const prisma = require("../helpers/prisma")


exports.getAllProducts = async () => {
    const products = await prisma.products.findMany();
    return products;
}

exports.getProductById = async (id) => {
    const product = await prisma.products.findMany({
        where: {
            id: id
        }
    });
    return product;
}

exports.createProduct = async (data) => {
    
    const product = await prisma.products.create({
        data: {
                ...data
            }
        });
    console.log(product);
    return product;
}