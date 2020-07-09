const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.send({ msg: 'hello server' });
});

app.use(express.static('client/dist'));
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
