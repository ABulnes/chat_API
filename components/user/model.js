// User models.

// Moongose
const moongose = require('mongoose');
const Schema = moongose.Schema;


// Schemes

const userSchema = new Schema({
    name: String,
});

//Model
const userModel = moongose.model('User', userSchema);

module.exports = userModel;