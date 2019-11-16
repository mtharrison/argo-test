'use strict';

const Hapi = require('@hapi/hapi');
const Os = require('os');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/{p*}',
        handler: function (request, h) {

            return `Hello, world! ${Os.hostname()}`;
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
