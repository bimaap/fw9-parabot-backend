const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');
const wishlistModel = require('../models/wishlist');

exports.createWishlist = async (req, res) => {
    const idUser = req.authUser.id;
    try {
        req.body.product_id = parseInt(req.body.product_id, 10);
        req.body.user_id = idUser;
        if(req.body.is_favorite == 'true'){
            req.body.is_favorite = true;
        } else {
            req.body.is_favorite = false;
        }
        const wishlist = await wishlistModel.createWishlist(req.body)
        return response(res, 'success add product to wishlist', wishlist);
    } catch (error) {
        return errorResponse(error, res);
    }
}