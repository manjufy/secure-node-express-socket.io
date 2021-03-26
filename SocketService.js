const fs = require('fs');
const https = require('https');
const path = require('path');

class SocketService {
    constructor(app, port) {
        this.port = port;

        switch(process.env.NODE_ENV) {
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
                // with nginx configuration
                this.server = https.createServer({
                    key: fs.readFileSync(
                        process.env.SSL_PDT_KEY || '/etc/nginx/ssl/domain.key'
                    ),
                    cert: fs.readFileSync(
                        process.env.SSL_PDT_CERT || '/etc/nginx/ssl/domain.crt'
                    ),
                    ca: fs.readFileSync(
                        process.env.SSL_PDT_CA || '/etc/nginx/ssl/domain.ca-bundle',
                    ),
                    requestCert: true,
                    rejectUnauthorized: false
                });
                break;
        }
    }

    initServer() {
        this.io = require('socket.io')(this.server);
        this.server.listen(this.port);
    }
}

module.exports = SocketService;