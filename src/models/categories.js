const prisma = require("../helpers/prisma")

exports.createCategory = async (data) => {
    
    const category = await prisma.categories.create({
        data: {
            category_name: data.category_name,
            category_image: data.category_image
        }
    })
    return category;
}

exports.getAllCategories = async () => {
    const categories = await prisma.categories.findMany();
    return categories;
}

exports.getCategory = async (id) => {
    const category = await prisma.categories.findMany({
        where:{
            id: id
        }
    });
    return category;
}

exports.updateCategory = async (id, data) => {
    const category = await prisma.categories.update({
        where:{
            id: id
        },
        data: {
            category_name: data.category_name,
            category_image: data.category_image
        }
    });
    return category;
}

exports.deleteCategory = async (id) => {
    const category = await prisma.categories.delete({
        where: {
            id: id
        }
    });
    return category;
}