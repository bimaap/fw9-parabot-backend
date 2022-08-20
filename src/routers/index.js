const router = require('express').Router();

//Penggunaan route silahkan sesuaikan denggan kebutuhan
router.use('/',require('./chats'));
router.use("/checkouts", require("./checkouts"));

module.exports=router