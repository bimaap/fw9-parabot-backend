const prisma = require('../helpers/prisma');

exports.sendChatModel = async(sender,recepient) =>{
    const result = {};
    try{
        const wrapper = await prisma.chats.create({
            data:{
                sender_id:sender,
                recepient_id:recepient,
            }
        });
        result.data =  wrapper
        return result
    }
    catch(e){
        console.log(e);
        result.error = e;
        return result;
    }
};

exports.sendContentModel = async(id,data) => {
    const result = {};
    try{
        const data = await prisma.chats_content.create({
            data:{
                content,
                created_at,
                chat_id:id
            }
        })
        result.data = data;
        return result;
    }
    catch(e){
        console.log(e);
        result.error = e;
        return result;
    }
};

exports.getAllWrapperModel = async(id) =>{
    const result = {};
    try{
        const data = await prisma.chats.findMany({
            where: {
                recepient_id:id,
                sender_id:id
            }
        })
        result.data = data;
        return result;
    }
    catch(e){
        result.error = e;
        return result;
    }
};

exports.getAllChatsModel = async(id) =>{
    const result = {};
    try{
        const data = await prisma.chats_content.findMany({
            where:{
                chat_id:id
            }
        })
        result.data=data;
        return result;
    }
    catch(e){
        result.error=e;
        return result;
    }
}; 