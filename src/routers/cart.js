const cart = require('express').Router();
const authMiddleware = require('../middleware/auth');
const cartController = require('../controllers/cart');
const auth = require('./auth');

cart.post('/cart', authMiddleware, cartController.createCart);
cart.patch('/cart', authMiddleware, cartController.updateCart);
cart.post('/create-order', authMiddleware, cartController.createOrder);

module.exports = cart;