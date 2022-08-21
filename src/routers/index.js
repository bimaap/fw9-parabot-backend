const router = require('express').Router();

//Penggunaan route silahkan sesuaikan denggan kebutuhan


//Profile
const profileCustomerRoutes = require("../routers/profileCustomer");
const profileSellerRoutes = require("../routers/profileSeller");

router.use("/profile", profileCustomerRoutes);
router.use("/profile", profileSellerRoutes);


router.use('/',require('./chats'));
router.use("/checkouts", require("./checkouts"));
router.use('/',require('./notification'));
router.use('/', require('./product'));
router.use('/',require('./auth'))
router.use('/', require('./categories'));
router.use('/', require('./wishlist'));
router.use('/', require('./cart'));

module.exports=router

