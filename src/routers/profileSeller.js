const router = require('express').Router();

const profileSellerController = require("../controllers/profileSeller");

router.get(
    "/seller",  
    profileSellerController.getAllSeller
  );
router.get(
   "/seller/:id",

    profileSellerController.getSellerById
  );

router.patch(
    "/seller/:id", profileSellerController.updateSeller
  );

//Admin
router.post(
    "/admin/seller/:id", profileSellerController.createSeller
  );
router.delete(
    "/admin/seller/:id",
    profileSellerController.deleteSeller
  );
  
  module.exports = router;