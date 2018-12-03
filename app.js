const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const mongoose = require('mongoose');
const user = require('./routes/user.route');
mongoose.connect('mongodb://localhost/jwtauth', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
    res.json({
        'Tutorial': 'Welcome to the Node.js JWT demo'
    })
});

app.use('/user', user);

app.listen(PORT, function(){
    console.log("Listening on the port "+PORT);
});

