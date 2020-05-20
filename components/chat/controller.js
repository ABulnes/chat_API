// Chat controller

//Store
const store = require('./store');

/**
 * Controller logic for creating chats
 * @param {array} users 
 */
const createChat = (users) => {
    if (!users || !Array.isArray(users) || users.length === 0 ){
        return Promise.reject('Invalid data');
    }
    const usersInChat = {
        users
    }
   
    return store.add(usersInChat);
}

/**
 * Controller logic for listing chats
 */
const getChats = (userId) => {
    return store.list(userId);
}

module.exports = {
    createChat,
    getChats,
}