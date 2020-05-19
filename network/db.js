// Database connection
const db = require('mongoose');

//Connecting to DB
db.Promise = global.Promise;
db.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log('[db]: connected')

module.exports = db;