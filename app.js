const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const server = http.createServer(app);

server.listen(3000);
