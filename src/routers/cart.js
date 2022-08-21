const cart = require('express').Router();
const authMiddleware = require('../middleware/auth');
const cartController = require('../controllers/cart');

cart.post('/cart', authMiddleware, cartController.createCart);

module.exports = cart;