// Database connection
const db = require('mongoose');

db.Promise = global.Promise;
//Connecting to DB
async function connect(){
    await db.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('[db]: connected')

}


module.exports = connect;