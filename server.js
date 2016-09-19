'use strict';

var hapi = require('hapi'),
    server = new hapi.Server();

var routes = require('./api/routes');

server.register(require('inert'), function(err) {
    
    if (err) {
        throw err;
    }

    server.connection({ port: 3000 });

    server.route(routes);

    server.start(function(err) {
        if (err) {
            throw err;
        }
        console.log('Web server is listening to http://localhost:3000');
    });
});
