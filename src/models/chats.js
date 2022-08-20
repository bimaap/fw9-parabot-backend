const prisma = require('../helpers/prisma');

exports.sendChatModel = async(sender,recepient) =>{
    const result = {};
    try{
        const wrapper = await prisma.chats.create({
            data:{
                recepient_id:parseInt(recepient),
                sender_id:sender
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

exports.sendContentModel = async(sender,body) => {
    const result = {};
    try{
        const chat = await prisma.chats_content.create({
            data:{
                content:body.content,
                recepient_id:parseInt(body.recepient_id),
                sender_id:sender,
                chat_id:parseInt(body.chat_id)
            }
        })
        result.data = chat;
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
        const data = await prisma.users.findMany({
            where: {
                id
            },
            include:{
                profiles:true,
                chats_chats_recepient_idTousers:true,
                chats_chats_sender_idTousers:true,
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