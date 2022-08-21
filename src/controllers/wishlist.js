
const wishlistModel = require('../models/wishlist');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');

exports.readWishlist = async(req,res)=>{
    const id = parseInt(req.authUser.id);
    const wishlist = await wishlistModel.readWishlistModel(id);
    if(wishlist.error){
        return errorResponse(wishlist.error,res);
    }
    if(wishlist.data){
        return response(res,'Showing wishlist',wishlist.data);
    }
}

exports.updateWishlist=(req, res)=>{
    const { id } = req.params;
    wishlistModel.updateWishlist.updateWishlist(id, req.body, (err)=>{
      if(err){
        return errorResponse(err,res);
      }
      else{
        return response(res, 'Create user succesfully');
      }
    });
  };


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
