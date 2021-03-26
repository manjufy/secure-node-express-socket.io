const fs = require('fs');
const https = require('https');
const path = require('path');

class SocketService {
    constructor(app, port) {
        this.port = port;

        switch(process.env.NODE_EV) {
            case 'development':
                this.server = https.createServer({
                    key: fs.readFileSync(
                        path.resolve(process.env.SSL_DEV_KEY || './ssl/localhost.key')
                    ),
                    cert: fs.readFileSync(
                        path.resolve(process.env.SSL_DEV_CERT || './ssl/localhost.crt')
                    )
                }, app);
                break;
            default:
                // define production https server
        }
    }

    initServer() {

    }
}

module.exports = SocketService;