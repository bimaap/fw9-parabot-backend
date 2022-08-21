const wishlistModel = require('../models/wishlist');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');

exports.createWishlist = async(req,res)=>{
    const id = req.authUser.id;
    const wishlist = await wishlistModel.createWishlistModel(id,req.body);
    if(wishlist.error){
        return errorResponse(wishlist.error,res);
    }
    if(wishlist.data){
        return response(res,'wishlist created',wishlist.data);
    }
};

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