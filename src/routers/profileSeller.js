const router = require('express').Router();

const profileSellerController = require("../controllers/profileSeller");

router.get(
    "/profile/seller",  
    profileSellerController.getAllSeller
  );
router.get(
   "/profile/seller/:id",

    profileSellerController.getSellerById
  );

router.patch(
    "/profile/seller/:id", profileSellerController.updateSeller
  );

//Admin
router.post(
    "/profile/admin/seller/:id", profileSellerController.createSeller
  );
router.delete(
    "/profile/admin/seller/:id",
    profileSellerController.deleteSeller
  );
  
  module.exports = router;