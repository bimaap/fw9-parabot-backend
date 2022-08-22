const db = require("../helpers/db");
const prisma = require("../helpers/prisma");

exports.createCart = async (data) => {
    const cart = await prisma.cart.create({
        data,
        include: {
            products: true,
            coupons: true, 
            orders: true
        }
    })
    return cart;
}

exports.updateCart=(id, data, cb)=>{
    let val = [id];
    const filtered = {};
    const obj ={product_id: data.product_id, 
      user_id:data.user_id, 
      quantity:data.quantity, 
      total_price:data.total_price,
    shipping: data.shipping,
    coupon_id: data.coupon_id};
    for(let x in obj){
      if(obj[x]!==null){
        if(obj[x]!==undefined){
          console.log(obj[x]);
          filtered[x]=obj[x];
          val.push(obj[x]);
        }
      }
    }
    const key = Object.keys(filtered);
    const finalResult = key.map((o, ind)=>`${o}=$${ind+2}`);
    const q = `UPDATE cart SET ${finalResult} WHERE user_id=$1 RETURNING *`;
    db.query(q, val, (err, res)=>{
      console.log(res);
      if(res){
        cb(err, res);
      }else{
        cb(err);
      }
      // cb(res.rows);
    });
  };

exports.createOrder=(status_payment, data, cb)=>{
    const filtered = {};
    const obj ={cart_id: data.cart_id, 
      status_payment:status_payment, 
      checkout_id:data.checkout_id};
    for(let x in obj){
      if(obj[x]!==null){
        if(obj[x]!==undefined){
          console.log(obj[x]);
          filtered[x]=obj[x];
          val.push(obj[x]);
        }
      }
    }
    const key = Object.keys(filtered);
    const finalResult = key.map((o, ind)=>`${o}=$${ind+2}`);
    const q = `INSERT INTO order (${key}) VALUES (${finalResult}) RETURNING *`;
    db.query(q, val, (err, res)=>{
      console.log(res);
      if(res){
        cb(err, res);
      }else{
        cb(err);
      }
      // cb(res.rows);
    });
};