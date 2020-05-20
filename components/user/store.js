// User store module.

// Models
const Model = require('./model');

/**
 *  Save an user in database
 * @param {object} user The user to create
 * @returns Promise
 */
function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
}

/**
 * List users in database
 * @param {object} filter Filter object with property name
 */
function getUsers(filter){
    return Model.find(filter);
}



module.exports = {
    'add': addUser,
    'list': getUsers,
}