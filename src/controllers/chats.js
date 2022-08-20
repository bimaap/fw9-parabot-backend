const chatsModel = require('../models/chats');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');

exports.wrapperChat = async(req,res) =>{
    const sender = parseInt(req.authUser.id);
    const wrapper = await chatsModel.sendChatModel(sender,req.body.recepient);
    if(wrapper.error){
        return errorResponse (wrapper.error,res);
    }
    if(wrapper.data){
        return response (res,'Receiver Selected', wrapper.data);
    }
};

exports.contentChat = async(req,res) => {
    const sender = parseInt(req.authUser.id);
    const chat = await chatsModel.sendContentModel(sender,req.body);
    if(chat.error){
        return errorResponse(chat.error,res)
    }
    if(chat.data){
        return response(res,'Text Sent',chat.data);
    }
};

exports.getAllWrapper = async(req,res) =>{
    const id = parseInt(req.authUser.id);
    const data = await chatsModel.getAllWrapperModel(parseInt(id));
    console.log(data);
    if(data.error){
        return errorResponse(data.error,res);
    }
    if(data.data){
        return response(res,'Showing All Chat here',data.data);
    }
};

exports.getAllChat = async(req,res) => {
    const id = parseInt(req.authUser.id);
    const data = await chatsModel.getAllChatsModel(parseInt(id));
    if(data.error){
        return errorResponse(data.error);
    }
    if(data.data){
        return response(res,'Showing All Content', data.data);
    }
};