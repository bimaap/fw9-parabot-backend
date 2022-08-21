const product = require('express').Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/product');
const uploudMiddleware = require('../middleware/upload');

product.get('/products', productController.getAllProduct);
product.get('/products/:id', productController.getProductById);
product.post('/products', uploudMiddleware, productController.createProduct);

module.exports = product;