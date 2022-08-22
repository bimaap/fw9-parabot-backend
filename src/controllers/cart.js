const response = require('../helpers/standardResponse');
const cartModel = require('../models/cart');
const errorResponse = require('../helpers/errorResponse');
const productModel = require('../models/product');

exports.createCart = async (req, res) => {
    const idUser = req.authUser.id;
    try {
        product_id = parseInt(req.body.product_id, 10);
        const getProduct = await productModel.getProductById(product_id);
        const price = getProduct[0].price;
        const totalPrice = parseInt(price, 10) * parseInt(req.body.quantity, 10);
        if(getProduct.length<1) { 
            return response(res, 'error!!! product not found', null, null, 400);
        } else {
            //data
            req.body.user_id = idUser;
            req.body.product_id = parseInt(req.body.product_id, 10);
            req.body.quantity = parseInt(req.body.quantity, 10);
            req.body.total_price = totalPrice;
            const cart = await cartModel.createCart(req.body);
            return response(res, 'success add product to cart', cart);
        }
    } catch (error) {
        // console.log(error);
        return errorResponse(error, res);
    }    
}

exports.updateCart=(req, res)=>{
    const { id } = req.params;
    cartModel.updateCart(id, req.body, (err)=>{
      if(err){
        return errorResponse(err,res);
      }
      else{
        return response(res, 'Create user succesfully');
      }
    });
};

exports.createOrder=(req, res)=>{
    const {payment_status= 'pending'}=req.query
    cartModel.createOrder(payment_status, req.body, (err)=>{
      if(err){
        return errorResponse(err,res);
      }
      else{
        return response(res, 'Create user succesfully');
      }
    });
};

exports.getCartUser=(req, res)=>{
    const id = parseInt(req.authUser.id)
    cartModel.getCartUser(id, (err, res)=>{
      if(err){
        return errorResponse(err,res);
      }
      else{
        return response(res, 'Get all cart user succesfully');
      }
    });
};