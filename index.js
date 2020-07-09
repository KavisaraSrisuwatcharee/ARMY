const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.send({ msg: 'hello server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
