const chatsModel = require('../models/chats');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');

exports.wrapperChat = async(req,res) =>{
    const sender = req.authUser.id
    const receiver = req.body.receiver_id
    const wrapper = await chatsModel.sendChatModel(sender,receiver);
    if(wrapper.error){
        return errorResponse (wrapper.error,res);
    }
    if(wrapper.data){
        return response (res,'Receiver Selected', wrapper.data);
    }
};

exports.contentChat = async(req,res) => {
    const id = req.params.chat_id
    const chat = await chatsModel.sendContentModel(id,req.body);
    if(chat.error){
        return errorResponse(chat.error,res)
    }
    if(chat.data){
        return response(res,'Text Sent',chat.data);
    }
};

exports.getAllWrapper = async(req,res) =>{
    const id = req.authUser.id;
    const data = await chatsModel.getAllWrapperModel(id);
    if(data.error){
        return errorResponse(data.error,res);
    }
    if(data.data){
        return response(res,'Showing All Chat here',data.data);
    }
};

exports.getAllChat = async(req,res) => {
    const id = req.body.chat_id;
    const data = await chatsModel.getAllChatsModel(id);
    if(data.error){
        return errorResponse(data.error);
    }
    if(data.data){
        return response(res,'Showing All Content', data.data);
    }
};