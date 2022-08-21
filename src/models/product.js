const prisma = require("../helpers/prisma")


exports.getAllProducts = async () => {
    const products = await prisma.products.findMany({
        where: {
            is_archive: false
        }
    });
    return products;
}

exports.getProductById = async (id) => {
    const product = await prisma.products.findMany({
        where: {
            id: id
        },
        include: {
            categories: true,
            reviews: true,
            wishlist: true,
            cart: true
        }
    });
    return product;
}

exports.createProduct = async (data) => {
    
    const product = await prisma.products.create({
        data: {
                // ...data
                product_name: data.product_name,
                description: data.description,
                price: data.price,
                stock: data.stock,
                stock_condition: data.stock_condition,
                color: data.color,
                brand: data.brand,
                category_id: data.category_id,
                sku: data.sku,
                product_images: data.product_images,
                is_archive: data.is_archive,
                sold: data.sold
            }
        });
    console.log(product);
    return product;
}

exports.updateProduct = async (id, data) => {
    const product = await prisma.products.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    })
    return product;
}

exports.deleteProduct = async (id) => {
    const product = await prisma.products.delete({
        where:{
            id: id
        }
    });
    return product;
}