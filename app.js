const express = require('express');

const app =express();
const config = require('config');

const router = require('./routes/bookRoute');

const path = require('path');



app.use(express.static(path.join(__dirname,'./public')));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./view'));

app.use('/',router);


app.listen(config.get("app.port"),()=>{
    console.log(`server started at ${config.get("app.port")}`);
})