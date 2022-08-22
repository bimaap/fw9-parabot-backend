const chatsModel = require('../models/chats');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');
const { Result } = require('express-validator');

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

exports.wrapperGetAll = (req,res) =>{
    const id = parseInt(req.authUser.id);
    chatsModel.wrapperChatModel(id,(err,result)=>{
        if(err){
            console.log(err);
            return errorResponse(err,res);
        }
        if(result.rowCount<1){
            return response(res,'ID Not Found',null,null,400);
        }
        return response(res,'Show All Wrapper',result.rows);
    })
};

exports.getAllChat = async(req,res) => {
    const id = parseInt(req.params.id);
    chatsModel.getAllChatsModel(id,(err,result)=>{
        if(err){
            console.log(err);
            return errorResponse(err,res);
        }
        if(result.rowCount<1){
            return response(res,'ID Not Found',null,null,400);
        }
        else{
            return response(res,'Show All Conversation',result.rows);
        }
    })
};