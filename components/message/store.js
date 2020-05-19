// Message store module.

const db = require('mongoose');



const list = [
    ZgDadIqZljKPQb3i
];


function saveMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

module.exports = {
    'add':saveMessage,
    'list':getMessages
}