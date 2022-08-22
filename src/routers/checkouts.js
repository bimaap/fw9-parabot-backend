
const checkouts = require("express").Router();
const checkoutsController = require("../controllers/checkouts");
const auth = require('../middleware/auth')

checkouts.get("/", checkoutsController.getAll);
checkouts.post("/", auth, checkoutsController.post);

module.exports = checkouts;
