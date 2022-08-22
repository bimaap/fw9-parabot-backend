const router = require('express').Router();
const { body } = require("express-validator");
const profileCustomerController = require("../controllers/profileCustomer");
const uploadMiddleware = require('../middleware/upload');

const validation = [
  body("phone_num")
    .isNumeric()
    .withMessage("Please input number only"),
  body("full_name")
    .isLength({ min: 2 })
    .withMessage("Please input your fullname correctly"),
];

router.get("/profile/customer", profileCustomerController.getAllCustomer);
router.get("/profile/customer/:id",profileCustomerController.getCustomerById);
router.patch("/profile/customer/:id", uploadMiddleware, profileCustomerController.updateCustomer);
  
//Admin
router.post("/profile/admin/customer/", uploadMiddleware, profileCustomerController.createCustomer);
router.delete("/profile/admin/customer/:id", profileCustomerController.deleteCustomer);
  
module.exports = router;