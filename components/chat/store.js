// Chat store module

//Models
const Model = require('./model');

/**
 * Create a chat in database
 * @param {array} users  The users in the chat
 */
function createChat(users){
    const chat = new Model(users);
    return chat.save();
}

/**
 * List all the chat availables in database
 */
async function getChats(){
    return await Model.find().populate('users').exec();
}


module.exports = {
    'add': createChat,
    'list': getChats,
}

