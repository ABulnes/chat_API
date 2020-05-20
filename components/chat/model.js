// Chat models.

// Moongose
const moongose = require('mongoose');
const Schema = moongose.Schema;


// Schemes

const chatSchema = new Schema({
   users: [
       {
           type: Schema.ObjectId,
           ref: 'User',
       }
   ]
});

//Model
const chatModel = moongose.model('Chat', chatSchema);

module.exports = chatModel;