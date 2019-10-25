const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 3000;



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/index.html'));
   
});

router.get('/about.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/about.html'));
    
});

router.get('/contact.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/contact.html'));
    
});

router.get('/work.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/work.html'));
    //__dirname : It will resolve to your project folder.
});


app.use(express.static('public'));

app.use('/', router);



app.listen(port, function () {
    console.log('app listening on port ' + port);
});