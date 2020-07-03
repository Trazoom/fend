const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });
 let answer = {};
 let projectData = [];
const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})

app.get('/test', function (req, res) {
    res.send(answer)
})
app.get('/all', sendData);

function sendData (req, res) {
  answer = getResult('https://www.facebook.com/');
  //console.log(answer);
  //res.send(answer);
};
let noget = {};

app.post('/add', callBack);

function callBack(req,res){
  console.log('Post received!');
  console.log(req.body)
  projectData.push(req.body);
  console.log(projectData);
}

function getResult(url) {
  textapi.classify({
    'url': url
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      answer = response;
      return response;
    }
  });
}
