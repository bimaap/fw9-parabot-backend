const prisma = require('../helpers/prisma');

exports.createNotificationModel = async(data) =>{
    const result = {};
    try{
        const notif = await prisma.notification.create({
            data:{
                data
            }
        })
        result.data=notif;
        return result;
    }
    catch(e){
        result.error=e;
        return result;
    }
};

exports.readNotificationModel = async(id) => {
    const result = {};
    try{
        const notif = await prisma.notification.findMany({
            where:{
                user_id: id
            }
        });
        result.data = notif
        return result
    }
    catch(e){
        result.error = e;
        return result
    }
};