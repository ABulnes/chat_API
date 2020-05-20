//Messages controller

//Store
const store = require("./store");

//Socket
const socket = require('../../socket').socket;

/**
 * Controller logic for add a message.
 * @param {string} user The user who wrote the message
 * @param {string} message  The message itself
 * @returns Created message
 *
 */
const addMessage = (user, message, chat, file) => {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      reject("Missing data");
      return false;
    }


    let fileUrl = "";
    if (file) {
      fileUrl = `http://localhost:3000/app/files/${file.filename}`;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };


    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });
};

/**
 * Controller logic for getting messages
 * @param {string} filterUser Filter message by user
 *
 */
const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

/**
 * Controller logic for updating messages
 * @param {int} id The id of the message
 * @param {string} message The new content of the message
 */
const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.update(id, message);
    resolve(result);
  });
};

/**
 * Controller logic for deleting message
 * @param {int} id The id of the message
 */
const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Invalid Data");
      return false;
    }

    const result = await store.delete(id);
    resolve(result);
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
