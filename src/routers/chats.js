const chats = require('express').Router();
const chatsController = require('../controllers/chats');
const auth = require('../middleware/auth')

chats.post('/chats/',auth,chatsController.wrapperChat);
chats.post('/chat/content',auth,chatsController.contentChat);
chats.get('/chats/',auth,chatsController.wrapperGetAll);
chats.get('/chat/content/',auth,chatsController.getAllChat);

module.exports=chats