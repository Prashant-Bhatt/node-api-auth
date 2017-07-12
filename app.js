const express = require ('express');
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const passport = require ("passport");

//connecting to mongo db
const config = require ("./config/database");
mongoose.connect(config.database);

mongoose.connection.on('connected',() => {
    console.log("database connected "+ config.database);
});

mongoose.connection.on('error',(err) => {
    console.log("Error while connecting to db: "+err);
});

//initialize express obj
const app = new express();

const port = 2000;

//cors middleware 
app.use(cors());

//body parser midleware
app.use(bodyParser.json());

//authentication (Passport jwt middleware)
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// user module
const users = require ('./controllers/users.js');
app.use('/users',users);

//index route
app.get('/',(req,res)=>{
    res.status(200).send("HI this is home passsssssaaaawwwssssddssgesss");
})

//start server
app.listen(port,function(){
    console.log("Server is listening on port ::" + port);
})


