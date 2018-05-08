var express = require('express');
var app = express()
var fileUpload = require('express-fileupload');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/images', express.static(__dirname + '/images'));
app.use(fileUpload());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res, next) {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let actualFile = req.files.image;

  // Use the mv() method to place the file somewhere on your server
  actualFile.mv(__dirname + '/images/' + req.files.image.name, function(err) {
    if (err) return res.status(500).send(err);

    io.emit('commit', '/images/' + req.files.image.name);
    res.send('File uploaded!');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
