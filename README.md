# Secure Express Socket.io Node app

## Configuring local development with SSL Certificates 

To setup the local development to work secure connections
- Setup a directory called `ssl` in the root directory of the project
- Use `openssl` to generate certificate for localhost. cd to `ssl` directory and generate the certificates

    openssl req -x509 \
    -out localhost.crt \
    -keyout localhost.key \
    -newkey rsa:2048 -nodes -sha256 \
    -subj '/CN=localhost' \
    -extensions EXT -config <( \
    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")


## Run

```
Node Version: Refer to .nvmrc
npm install
npm run start
http://localhost:3000
```


## Reference
    https://betterprogramming.pub/secure-websockets-with-express-and-socket-io-d9a0976c1427