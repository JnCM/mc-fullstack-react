const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});