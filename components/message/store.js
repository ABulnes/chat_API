// Message store module.

//Models
const Model = require("./model");



/**
 * Save a message in database
 * @param {string} message 
 */
function saveMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}


/**
 * Get messages in database 
 * @param {string} filterUser Filter message by user
 * @returns array with messages
 */
async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

/**
 * Update a message in database
 * @param {int} id The id of the message
 * @param {string} text The new text in message
 * @returns updated message
 */
async function updateMessage(id, text) {
  try {
    const foundMessage = await Model.findOne({
      _id: id,
    });
    foundMessage.message = text;
    const newMessage = await foundMessage.save();
    return newMessage;
  } catch (err) {
    return err;
  }
}

/**
 * Delete a message in database
 * @param {int} id The id of the message
 * 
 */
async function removeMessage(id){
  try{
    return await Model.deleteOne({_id: id});
  }catch(err){
    return err;
  }
}

module.exports = {
  add: saveMessage,
  list: getMessages,
  update: updateMessage,
  delete: removeMessage,
};
