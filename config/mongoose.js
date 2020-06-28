const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Auth_SystemDB');


const db = mongoose.connection;


db.on('error', console.error.bind(console,"Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to DB::MongoDB' );
})


module.exports = db;