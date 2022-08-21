const wishlist = require('express').Router()
const wishlistController = require('../controllers/wishlist');
const authMiddleware = require('../middleware/auth');

wishlist.post('/wishlist', authMiddleware, wishlistController.createWishlist);

module.exports = wishlist;