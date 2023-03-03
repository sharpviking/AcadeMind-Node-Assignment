// const http = require('http');

const express = require('express');

const app = express();


app.use((res, req, next) => {
    console.log('Assignment Text');
    next();
})

app.use((res, req, next) => {
    console.log('Assignment middleware');
    res.send('when going gets tough, the tough gets going');
})

app.use('/', (res, req, next) => {
    console.log('/easy routing');
    res.send('<p>middleware handler for </p>');
});

app.use('/Users', (res, req, next) => {
    console.log('Enough of middleware');
    res.send('user middleware');
})

app.listen(3000);