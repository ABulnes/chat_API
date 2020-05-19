// Modulo de URL's

// Express
const express = require('express');

// Rutas
const message = require('../components/message/network');


const routes = (server)=> {
    server.use('/message', message );
}

module.exports = routes;