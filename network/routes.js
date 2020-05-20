// URL's module

// Express
const express = require('express');

// Routes
const message = require('../components/message/network');
const user = require('../components/user/network');
const chats = require('../components/chat/network');

const routes = (server)=> {
    server.use('/message', message );
    server.use('/user', user );
    server.use('/chat', chats );
}

module.exports = routes;