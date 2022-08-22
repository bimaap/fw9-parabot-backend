const router = require('express').Router();
const { body } = require("express-validator");
const profileSellerController = require("../controllers/profileSeller");
const uploadMiddleware = require('../middleware/upload');

const validation = [
  body("phone_num")
    .isNumeric()
    .withMessage("Please input number only"),
  body("full_name")
    .isLength({ min: 2 })
    .withMessage("Please input your fullname correctly"),
];

router.get("/profile/seller",  profileSellerController.getAllSeller  );
router.get("/profile/seller/:id",profileSellerController.getSellerById);
router.patch("/profile/seller/:id", uploadMiddleware, profileSellerController.updateSeller);

//Admin
router.post("/profile/admin/seller/", uploadMiddleware, profileSellerController.createSeller);
router.delete("/profile/admin/seller/:id",profileSellerController.deleteSeller);
  
module.exports = router;