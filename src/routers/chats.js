const chats = require('express').Router();
const chatsController = require('../controllers/chats');
const auth = require('../middleware/auth')

chats.post('/chats',auth,chatsController.wrapperChat);
chats.post('/chat/content',chatsController.contentChat);
chats.get('/chat',auth,chatsController.getAllWrapper);
chats.get('/chat/content',chatsController.getAllChat);

module.exports=chats