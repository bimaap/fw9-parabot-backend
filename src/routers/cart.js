const cart = require('express').Router();
const authMiddleware = require('../middleware/auth');
const cartController = require('../controllers/cart');

cart.post('/cart', authMiddleware, cartController.createCart);
cart.patch('/cart', authMiddleware, cartController.updateCart);
cart.post('/create-order', authMiddleware, cartController.createOrder);
cart.get('/cart', authMiddleware, cartController.getCartUser);

module.exports = cart;