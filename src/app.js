const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');
const app = express();

//app.use(express.static(path.join(__dirname,'/home/ubuntu/nodejs/CiCdPipeline')));
app.use(express.static(__dirname));
        
app.get('/*',(req, res) => {
res.sendFile(path.join(__dirname,'index.html'));
});

const port = process.env.PORT || '3003'; 
app.set('port',port);

const server = http.createServer(app);
server.listen(port,() => console.log('Running App')); 
