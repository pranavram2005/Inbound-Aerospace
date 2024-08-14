const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    city:{
         type:String,
    },
    message:{
          type:String,
    }
});

// create person models

const Person = mongoose.model('Person', personSchema);

module.exports = Person;