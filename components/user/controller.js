// User controller module.

//Modules
const store = require('./store');

/**
 * Controller logic for creating an user.
 * @param {string} name The user name
 * @returns Promise
 */
const addUser = (name) => {
    if (!name){
        return Promise.reject('Invalid name');
    }
    const user = {name};
    return store.add(user);
}

/**
 * Controller logic for listing users
 * @param {string} filter Filter by name
 * @returns Promise
 */
const getUsers = (filter) =>{
    let userFilter = {};
    if (filter){
        userFilter = {'name': filter};
    }
    return store.list(userFilter);
}


module.exports = {
    addUser,
    getUsers,
}