const wishlist = require('express').Router();
const wishlistController = require('../controllers/wishlist');
const auth = require('../middleware/auth');

wishlist.get('/all-wishlist',auth,wishlistController.readWishlist);
wishlist.post('/create-wishlist',auth,wishlistController.createWishlist);
wishlist.patch('/update-wishlist/:id', auth, wishlistController.updateWishlist);

module.exports=wishlist