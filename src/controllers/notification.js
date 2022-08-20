const notificationModel = require('../models/notification');
const errorResponse = require('../helpers/errorResponse');
const response = require('../helpers/standardResponse');

exports.createNotif = async(req,res)=>{
    const id = req.authUser.id;
    const notif = await notificationModel.createNotificationModel(id,req.body);
    if(notif.error){
        return errorResponse(notif.error,res);
    }
    if(notif.data){
        return response(res,'Notif created',notif.data);
    }
};

exports.readNotif = async(req,res)=>{
    const id = parseInt(req.authUser.id);
    const notif = await notificationModel.readNotificationModel(id);
    if(notif.error){
        return errorResponse(notif.error,res);
    }
    if(notif.data){
        return response(res,'Showing Notif',notif.data);
    }
}