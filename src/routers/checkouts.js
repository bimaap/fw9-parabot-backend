
const checkouts = require("express").Router();
const checkoutsController = require("../controllers/checkouts");

checkouts.get("/", checkoutsController.getAll);
checkouts.post("/", checkoutsController.post);

module.exports = checkouts;
