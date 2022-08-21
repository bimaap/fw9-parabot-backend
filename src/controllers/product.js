const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');
const productModel = require('../models/product');

exports.getAllProduct = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        return response(res, 'Success get all Products', products);
    } catch (error) {
        return errorResponse(error, res);
    }
}

exports.getProductById = async (req, res) => {
    // console.log(req.params)
    const idProduct = req.params.id;
    try {
        const product = await productModel.getProductById(parseInt(idProduct, 10));
        if(product.length < 1) {
            return response(res, 'Product not found !!!', null);
        } else {
            return response(res, 'Success get product datas', product);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.createProduct = async (req, res) => {
    req.body.price = parseInt(req.body.price, 10);
    req.body.stock = parseInt(req.body.stock, 10);
    if(req.body.stock_condition){
        if(req.body.stock_condition=='new'){
            req.body.stock_condition = true;
        } else {
            req.body.stock_condition = false;
        }
    }
    if(req.files){
        req.body.product_images = `${req.files.map((el)=>el.path)}`
    }
    req.body.is_archive = false;
    // console.log(req.body)
    // console.log(req.files)
    if(req.body.category_id){
        req.body.category_id = parseInt(req.body.category_id, 10);
    }
    req.body.sold=0;
    
    try {
        const product = await productModel.createProduct(req.body);
        return response(res, 'Success create product', product);
    } catch (error) {
        // console.log(error);
        return errorResponse(error, res);
    }
}

exports.updateProduct = async (req, res) => {
    const idProduct = parseInt(req.params.id, 10);
    try {
        if(req.body.is_archive){
            if(req.body.is_archive=='true'){
                req.body.is_archive = true;
            } else {
                req.body.is_archive = false;
            }
        } else {
            req.body.is_archive = false;
        }
        req.body.price = parseInt(req.body.price, 10);
        req.body.stock = parseInt(req.body.stock, 10);
        req.body.discount = parseFloat(req.body.discount/100);
        const product = await productModel.updateProduct(idProduct, req.body);
        return response(res, 'success for update product.', product);
    } catch (error) {
        // console.log(error)
        return errorResponse(error, res);
    }
}

exports.deleteProduct = async (req, res) => {
    const idProduct = parseInt(req.params.id);
    try {
        const product = await productModel.deleteProduct(idProduct);
        return response(res, 'Success deleted product.', product);
    } catch (error) {
        return errorResponse(error, res);
    }
}