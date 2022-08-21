const router = require('express').Router();

//Penggunaan route silahkan sesuaikan denggan kebutuhan


//Profile
const profileCustomerRoutes = require("../routers/profileCustomer");
const profileSellerRoutes = require("../routers/profileSeller");

router.use("/profile", profileCustomerRoutes);
router.use("/profile", profileSellerRoutes);


module.exports = router;