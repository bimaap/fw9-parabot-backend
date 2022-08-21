const auth = require('express').Router();
const authController = require('../controllers/auth');
const { body } = require('express-validator');
const bcrypt = require('bcrypt');
const validationCheck = require('../middleware/validation');

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

auth.post('/register', ...registerUserValidator, validationCheck, authController.register);
auth.post('/login', ...loginValidator, validationCheck, authController.login);
module.exports = auth ;