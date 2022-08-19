const notif = require('express').Router();
const notifController = require('../controllers/notification');
const auth = require('../middleware/auth');

notif.get('/notification',auth,notifController.readNotif);
notif.post('/notification',auth,notifController.createNotif);

module.exports=notif