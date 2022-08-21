const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');
const productModel = require('../models/product');

exports.getAllProduct = async (req, res) => {
    const products = await productModel.getAllProducts();
    return response(res, 'Success get all Products', products);
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
        req.body.product_images = `${req.files.map((el)=>el.filename)}`
    }
    // console.log(req.body)
    // console.log(req.files)
    try {
        const product = await productModel.createProduct(req.body);
        return response(res, 'Success create product', product);
    } catch (error) {
        return errorResponse(error, res);
    }
}