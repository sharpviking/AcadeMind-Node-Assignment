const path = require('path');

const express = require('express');

const router = express.Router();




router.get('/', (res, req, next) => {
    console.log('/easy routing');
    res.sendFile(path.join(rootDir, 'views', 'user1.html'))
});

router.get('/Users', (res, req, next) => {
    console.log('Enough of middleware');
    res.send('user middleware');
})