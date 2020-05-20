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
async function getChats(userId){
    let filter = {};
    if(userId){
       filter = {
           'users': userId
       }
    }
    return await Model.find(filter).populate('users').exec();
}


module.exports = {
    'add': createChat,
    'list': getChats,
}

