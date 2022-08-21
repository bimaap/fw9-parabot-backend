const router = require('express').Router();

const profileCustomerController = require("../controllers/profileCustomer");


router.get(
    "/customer",  
    profileCustomerController.getAllCustomer
  );
router.get("/customer/:id",profileCustomerController.getCustomerById);

router.patch(
    "/customer/:id", profileCustomerController.updateCustomer
  );
  
//Admin
router.post(
    "/admin/customer/:id", profileCustomerController.createCustomer
  );
router.delete(
    "admin/customer/:id",
    profileCustomerController.deleteCustomer
  );
  
  module.exports = router;