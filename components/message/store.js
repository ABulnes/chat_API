// Message store module.

//Models
const Model = require("./model");

function saveMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

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

module.exports = {
  add: saveMessage,
  list: getMessages,
  update: updateMessage,
};
