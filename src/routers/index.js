const router = require('express').Router();

//Penggunaan route silahkan sesuaikan denggan kebutuhan
router.use('/',require('./chats'));
router.use("/checkouts", require("./checkouts"));
router.use('/',require('./notification'));

module.exports=router