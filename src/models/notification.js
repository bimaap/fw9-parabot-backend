const prisma = require('../helpers/prisma');

exports.createNotificationModel = async(id,body) =>{
    const result = {};
    try{
        const notif = await prisma.notification.create({
            data:{
                user_id:parseInt(id),
                tittle:body.tittle,
                text:body.text
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
            },
            orderBy:{
                created_at:'desc'
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