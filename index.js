const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Questioner');
});

app.listen(port, () =>  console.log(`Listening on port ${port}`));