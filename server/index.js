const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Import Routes
const routes = require('../routes');

module.exports = app => {

    // Initialization DotEnv
    require('dotenv').config({path: `${__dirname}/../.env`});

    // Initialization database
    require('../database');

    // Settings
    app.set('port', process.env.PORT || 8080);

    // middlerware
    app.use(morgan('dev'));    
    app.use(cors()); // This is CORS enable for all Origin! 
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());


    // Router
    routes(app);

    return app;
}
