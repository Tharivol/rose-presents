var mongoose = require('mongoose');

var intakeform = mongoose.Schema({
    firstname: { type:String, required:true },
    lastname: { type:String, required:true },
    address: String,
    age: Number,
    email: String,
    phone: Number,
    injury: String,
    profession: String,
    songs: Array
});

module.exports = mongoose.model('intakeforms', intakeform)