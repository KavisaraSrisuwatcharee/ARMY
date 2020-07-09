const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.send({ msg: 'hello server' });
});

app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to BTS album' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
