const router = require('express').Router();

//Penggunaan route silahkan sesuaikan denggan kebutuhan
router.use('/',require('./chats'));
router.use("/checkouts", require("./checkouts"));
router.use('/',require('./notification'));
router.use('/favorite', require('./favorite'));
router.use('/wishlist', require('./wishlist'));

module.exports=router