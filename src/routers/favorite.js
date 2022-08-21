const favorite = require('express').Router();
const favoriteController = require('../controllers/favorite');
const auth = require('../middleware/auth');

favorite.get('/all-favorite',auth,favoriteController.readFavorite);
favorite.post('/create-favorite',auth,favoriteController.createWFavorite);
favorite.patch('/update-favorite/:id', auth, favoriteController.updateFavorite);
favorite.delete('/delete-favorite/:id', favoriteController.deleteFavorite);

module.exports=favorite