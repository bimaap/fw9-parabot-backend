const auth = require('express').Router();
const authController = require('../controllers/auth');
const { body } = require('express-validator');
const bcrypt = require('bcrypt');
const validationCheck = require('../middleware/checkValidation');

const registerUserValidator = [
  body('email')
    .notEmpty().withMessage('Email Required')
    .isEmail().withMessage('Wrong Email Format'),
  body('password')
    .notEmpty().withMessage('Password Required')
    .isLength({min: 6}).withMessage('Password must be more than 6 characters')
    .customSanitizer(
      async val =>{
        const hash = await bcrypt.hash(val, 10);
        return hash;
      })
];


const loginValidator =  [
  body('email')
    .exists({checkFalsy: true}).withMessage('Enter an Email')
    .isEmail().withMessage('Wrong Email Format'),
  body('password')
    .exists({checkFalsy: true}).withMessage('Enter a Password')
];

const registerSellerValidator = [
  body('email')
    .notEmpty().withMessage('Email Required')
    .isEmail().withMessage('Wrong Email Format'),
  body('password')
    .notEmpty().withMessage('Password Required')
    .isLength({min: 6}).withMessage('Password must be more than 6 characters')
    .customSanitizer(
      async val =>{
        const hash = await bcrypt.hash(val, 10);
        return hash;
      })
];

auth.post('/register-costumer', ...registerUserValidator, validationCheck, authController.registerCostumer);
auth.post('/login-costumer', ...loginValidator, validationCheck, authController.loginCostumer);
auth.post('/register-seller', ...registerSellerValidator, validationCheck, authController.registerSeller);
auth.post('/login-seller', ...loginValidator, validationCheck, authController.loginSeller);

module.exports = auth ;