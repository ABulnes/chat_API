// Message models.

// Moongose
const moongose = require('mongoose');
const Schema = moongose.Schema;


// Schemes

const messageSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref:  'User',
    },
    message: {
        type: String,
        required: true
    },
    chat : {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    date: Date,
    file: String,
});

//Model
const messageModel = moongose.model('Message', messageSchema);

module.exports = messageModel;