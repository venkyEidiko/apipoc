
const mongoose = require('mongoose');
const db =require('../services/db');


let schema  =  mongoose.Schema({

    bName:{type:String},
    bId:{type:Number, unique:true},
    bAuthor :{ type: String},
    bDate : {type:Date},
    bPrice : {type: Number},
    bQuantity : {type:Number}

})

schema.plugin(db.autoIncrement,{inc_field: 'bId'});

module.exports=mongoose.model('book',schema);