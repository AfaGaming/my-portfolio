const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.static("public"));

// routes

app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

app.listen(3000, console.log("Server online!"));