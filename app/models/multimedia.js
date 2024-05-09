const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Multimedia = Schema({
    name: {type : String, required: true },
    dimwith : { type : String },
    dimHeight : { type : String },
    format : { type : String },
    dir : { type: String, required : true }
})
module.exports = mongoose.model('Multimedia', Multimedia)