const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');
const categoriesModel = require('../models/categories');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoriesModel.getAllCategories();
        return response(res, 'Success.', categories);
    } catch (error) {
        return errorResponse(error, res);
    }
}
exports.getCategoryById = async (req, res) => {
    const idCategory = req.params.id;
    try {
        const category = await categoriesModel.getCategory(parseInt(idCategory,10));
        return response(res, 'success', category);
    } catch (error) {
        return errorResponse(error, res);
    }    
}
exports.createCategory = async (req, res) => {
    try {
        if(req.files) {
            if(req.files!=''){
                req.body.category_image = req.files[0].path;
            } else{
                req.body.category_image = null;
            }
        } else {
            req.body.category_image = null;
        }
        const category = await categoriesModel.createCategory(req.body);
        return response(res, 'Success create category', category);
    } catch (error) {
        return errorResponse(error, res);
    }
}
exports.updateCategory = async (req, res) => {
    const idCategory = req.params.id;
    try {
        if(req.files) {
            if(req.files==''){
                req.body.category_image = null;
            } else {
                req.body.category_image = req.files[0].path;
            }
        } else {
            req.body.category_image = null;
        }
        const category = await categoriesModel.updateCategory(parseInt(idCategory, 10), req.body);
        return response(res, 'success updated', category);
    } catch (error) {
        return errorResponse(error, res);
    }

}
exports.deleteCategory = async (req, res) => {
    const idCategory = req.params.id;
    try {
        const category = await categoriesModel.deleteCategory(parseInt(idCategory, 10))
        return response(res, 'success delete category', category);
    } catch (error) {
        return errorResponse(error, res);
    }
}