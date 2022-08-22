const db = require('../helpers/db');
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
                sender_id:parseInt(sender),
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

exports.wrapperChatModel = (id,cb) =>{
    const que = `SELECT * FROM chats WHERE sender_id=${id} OR recepient_id=${id}`
    db.query(que,(err,res)=>{
        if(err){
            cb(err);
        }else{
            if(res.rows[0].sender_id==id){
                const que = `SELECT profiles.image,profiles.full_name,chats.id,chats.recepient_id,chats.sender_id FROM profiles JOIN chats ON chats.recepient_id=profiles.user_id WHERE profiles.user_id=${res.rows[0].recepient_id}`
                db.query(que,(err,res)=>{
                    if(err){
                        cb(err);
                    }else{
                        cb(err,res);
                    }
                });
            }else{
                const que = `SELECT profiles.full_name,chats.id,chats.recepient_id,chats.sender_id FROM profiles JOIN chats ON chats.sender_id=profiles.user_id WHERE profiles.user_id=${res.rows[0].sender_id}`
                db.query(que,(err,res)=>{
                    if(err){
                        cb(err);
                    }else{
                        cb(err,res);
                    }
                });
            }
        }
    });
};

exports.getAllChatsModel = (id,cb) =>{
    const que = `SELECT * FROM chats_content WHERE chat_id=${id}`
    db.query(que,(err,res)=>{
        if(err){
            cb(err);
        }else{
            cb(err,res)
        }
    });
}; 