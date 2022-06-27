const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config( { path : 'config.env'} )
const dbConn = require('./db');
var cityControllers = require('./controllers/cityController');
dbConn()

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started at port :http://localhost:${port}`));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("", (req, res) => {
    res.send("server is running")})

app.use('/city', cityControllers);


