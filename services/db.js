const mongoose = require('mongoose');
const config = require('config');
const AutoIncrement = require('mongoose-sequence');
// const AutoIncrement = require('mongoose-sequence')(mongoose);


var host = config.get("db.host");
var port = config.get("db.port");
var db = config.get("db.name");

console.log(host,port,db);
// mongoose.connect(`mongodb://${host}:${port}/${db}`);
mongoose.connect(`mongodb+srv://venky:venky1234@cluster0.hjdib.mongodb.net/pocDataBase?retryWrites=true&w=majority`);


// mongoose.connect(`mongodb://${host}:${port}/${db}`);

const conn = mongoose.connection;
const autoIncrement =     AutoIncrement(conn);

conn.on('open',()=>{
    console.log('DB connected Bro');
})

module.exports={autoIncrement};