const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mail');

app.post("/api/sendEmail", (req, res) => {
    sendEmail(req);
})

app.listen(PORT,  () => {
    console.log( "Server Running at " + PORT);
})