const product = require('express').Router();
const authMiddleware = require('../middleware/auth');
const productController = require('../controllers/product');
const uploudMiddleware = require('../middleware/upload');

product.get('/products', authMiddleware, productController.getAllProduct);
product.get('/products/:id', authMiddleware, productController.getProductById);
product.post('/products', authMiddleware, uploudMiddleware, productController.createProduct);
product.patch('/products/:id', authMiddleware, productController.updateProduct);
product.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = product;