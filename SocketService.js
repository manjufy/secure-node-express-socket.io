const fs = require('fs');
const https = require('https');
const path = require('path');

class SocketService {
    constructor(app, port) {
        this.port = port;

        switch(process.env.NODE_EV) {
            case 'development':
                // define development https server
                break;
            default:
                // define production https server
        }
    }

    initServer() {

    }
}

module.exports = SocketService;